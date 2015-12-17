package com.hc.scm.mdm.web.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hc.scm.common.constans.SysConstans;
import com.hc.scm.common.model.SystemUser;
import com.hc.scm.common.utils.CommonUtil;
import com.hc.scm.common.utils.ResultModel;
import com.hc.scm.mdm.web.utils.CookieUtils;


@Controller
public class MainController {

	private static Logger logger = LoggerFactory.getLogger(MainController.class);

    @RequestMapping("/login.json")
    @ResponseBody
    public ResultModel login(String loginName, String loginPassword,String cookieFlag, HttpServletRequest req, HttpServletResponse response){
    	ResultModel resultModel = new ResultModel();
		try {
			if (StringUtils.isEmpty(loginName) ||StringUtils.isEmpty(loginPassword)) {
				resultModel.setResultCode("9003");
				resultModel.setMsg("用户名或密码不能为空");
            }
			
			if ("0".equals(resultModel.getResultCode())) {
				//验证用户名和密码
				SystemUser loginUser = new SystemUser();
				String passWord = CommonUtil.md5(loginPassword); //md5加密  
				loginUser.setUserCode(loginName);
				loginUser.setPassword(passWord);
				if (loginName.equals(loginPassword)) {
					//登录成功
					req.getSession().setAttribute(SysConstans.SESSION_USER, loginUser);

					//设置cookie保存登录信息
					if (StringUtils.isNotEmpty(cookieFlag) && cookieFlag.equals("1")) {
						CookieUtils.addCookie(req, response, SysConstans.LOGIN_SYSTEM_USER_COOKIE_ID,
								loginUser.getUserCode(), SysConstans.LOGIN_COOKIE_TIME);
					}
					//resultModel.setResDate(SysConstans.SUCCESS_KEY);

				} else {
					resultModel.setResultCode("9003");
					resultModel.setMsg("用户名或密码错误!");
					//resultModel.setResDate(SysConstans.FAILED_KEY);
				}
			}
		} catch (Exception e) {
			resultModel.setResultCode("9009");
			resultModel.setMsg("系统异常");
			logger.error("error:", e);
		}
        return resultModel;  
    }

	/**
	 * 注销
	 * @throws Exception 
	 */
	@RequestMapping("/logout.json")
	@ResponseBody
	public ResultModel logout(HttpServletRequest req,HttpServletResponse response, Model model) {
		ResultModel resultModel = new ResultModel();
		try {
			logoutMethod(req, response);
		} catch (Exception e) {
			resultModel.setResultCode("9009");
			resultModel.setMsg("系统异常");
			logger.error("error:", e);
		}
        return resultModel;
	}

	private void logoutMethod(HttpServletRequest request, HttpServletResponse response) {
		HttpSession session = request.getSession(false);
		if (session != null) {
			//1.清除登录用户session
			session.removeAttribute(SysConstans.SESSION_USER);
		}
	}
}
