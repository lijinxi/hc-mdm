package com.hc.scm.mdm.service.scheduler;



import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;



import org.apache.commons.lang.StringUtils;
import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.springframework.jmx.export.annotation.ManagedResource;
import org.springframework.stereotype.Service;
import com.hc.scm.common.constans.SysConstans;
import com.hc.scm.common.enums.JobBizStatusEnum;
import com.hc.scm.common.interfaces.RemoteJobService;
import com.hc.scm.common.model.JobBizLog;

/**
 * 
 */
@Service
@ManagedResource(objectName = SysConstans.MDM_SYS+"TestMyScheduler", description = StringUtils.EMPTY)
public class TestMyScheduler implements RemoteJobService {

	private static Logger log = org.slf4j.LoggerFactory.getLogger("SKUCONSTOCK"); 
	
	/**
	 * 调度错误日志
	 */
	private static final List<JobBizLog> JOB_BIZ_LOG = new ArrayList<JobBizLog>();
	
	/**
	 * 调度执行状态
	 */
	private static JobBizStatusEnum jobBizStatusEnum;

	
	private static String Schedule_flag = "Y";

	/**
	 * 执行job
	 */
	@SuppressWarnings("static-access")
	@Override
	public void executeJob(String triggerName,String groupName) {
		log.info("TestMyScheduler start! ");
		long startTime=System.currentTimeMillis();
		if("N".equals(Schedule_flag)){
			log.error("上一调度还未执行完，当前任务不执行! ");
			return;
		}
		
		Schedule_flag = "N";
		jobBizStatusEnum = JobBizStatusEnum.INITIALIZING;
		try {
			jobBizStatusEnum = JobBizStatusEnum.INITIALIZED;
			
			jobBizStatusEnum = JobBizStatusEnum.RUNNING;
			//accTaskService.executeAcctask();//处理自己的逻辑
			
			
			
			log.info("TestMyScheduler end! usedtime:"+(System.currentTimeMillis()-startTime)+"ms");
		} catch (Exception e1) {
			//记录日志
			saveJobBizLog("sku及容器记账异常:"+e1.getMessage()+";时间：" + System.currentTimeMillis(),triggerName,groupName);
			log.error("sku及容器记账异常："+e1.getMessage(),e1);
		} 
		
		jobBizStatusEnum = jobBizStatusEnum.FINISHED;
		Schedule_flag = "Y";
	}

	/***
	 * 获取job的状态
	 */
	@Override
	public JobBizStatusEnum getJobStatus(String arg0, String arg1) {
		return jobBizStatusEnum;
	}
	
	/**
	 * 给调度传日志
	 */
	@Override
	public String getLogs(String triggerName,String groupName,long lastDate) {
		String listStr="[]";
		List<JobBizLog> list=JOB_BIZ_LOG;
		if(list.size()==0){
			return listStr;
		}
		Iterator<JobBizLog> it=list.iterator();
		while(it.hasNext()){
			JobBizLog log=it.next();
			if(null!=log.getGmtDate()&&log.getGmtDate()<=lastDate){
				it.remove();
			}
		}
		ObjectMapper mapper = new ObjectMapper();
		try {
			listStr=mapper.writeValueAsString(list);
		} catch (JsonGenerationException e) {
			log.error("给调度框架传数据报错！",e);
		} catch (JsonMappingException e) {
			log.error("给调度框架传数据报错！",e);
		} catch (IOException e) {
			log.error("给调度框架传数据报错！",e);
		}
		return listStr;
	}

	
	private void saveJobBizLog(String errorMsg, String triggerName, String groupName) {
		JobBizLog jobBizLog = new JobBizLog();
		jobBizLog.setTriggerName(triggerName);
		jobBizLog.setGroupName(groupName);
		jobBizLog.setType(jobBizStatusEnum.name());
		jobBizLog.setGmtDate(System.currentTimeMillis());
		jobBizLog.setRemark(errorMsg);
		JOB_BIZ_LOG.add(jobBizLog);
	}
	
	@Override
	public void initializeJob(String arg0, String arg1) {
		log.error("远程任务初始化1");
	}

	@Override
	public void pauseJob(String arg0, String arg1) {
		log.error("远程任务暂停1");
	}

	@Override
	public void restartJob(String arg0, String arg1) {
		log.error("远程任务重启1");
	}

	@Override
	public void resumeJob(String arg0, String arg1) {
		log.error("远程任务恢复1");
	}

	@Override
	public void stopJob(String arg0, String arg1) {
		log.error("远程任务停止1");
	}  

}
