package com.hc.scm.mdm.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.common.model.TreeModel;
import com.hc.scm.mdm.dao.dal.BasOrgViewDao;
import com.hc.scm.mdm.dao.model.BasOrgViewModel;
import com.hc.scm.mdm.service.BasOrgViewService;



/**
 * Description: 
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liu.jw
 * @date:  2015-4-1 下午2:38:14
 * @version 1.0.0
 */
@Service("basOrgViewService")
public class BasOrgViewServiceImpl extends BaseCrudServiceImpl implements BasOrgViewService{

	@Resource
	BasOrgViewDao basOrgViewDao;

	@Override
	public BaseCrudDao init() {
		return basOrgViewDao;
	}

	@Override
	public List<TreeModel> getOrgViewTree(int type) throws ServiceException {
		List<BasOrgViewModel> list = null;

		if(type==1){//事业部
			list = basOrgViewDao.getDivision();
		}
		if(type==2){//厂区
			list = basOrgViewDao.getFactory();
		}
		if(type==3){//事业部->厂区
			list = basOrgViewDao.getDivFac();
		}
		if(type==4){//厂区->事业部
			list = basOrgViewDao.getFacDiv();
		}

		if(list == null)
			return null;
		else{
			//构造map，key为parentNo,value为其子节点
			Map<String,ArrayList<TreeModel>> map = this.convertToMap(list,type);
			//将map构造成树,根节点的父节点编号默认为0
			int rootNo = 0;
			List<TreeModel> tree = this.convertMapToTree(map,rootNo);

			if(tree != null && tree.size() > 0){
				//附加:事业部=>厂区 or 厂区=>事业部 时加载车间和厂仓库
				if(type == 3 || type == 4){
					List<BasOrgViewModel> list2 = basOrgViewDao.getStoreAndWorkshop();
					Map<String,ArrayList<TreeModel>> map2 = this.convertToMap2(list2);
					for(TreeModel model : tree){
						if(model.getChildren() != null && model.getChildren().size() > 0){
							this.setTreeNodeChildren(model.getChildren(), map2);
						}
					}
				}
			}

			return tree;
		}
	}

	private List<TreeModel> convertMapToTree(Map<String, ArrayList<TreeModel>> map,int rootNo) {
		List<TreeModel> tree = new ArrayList<TreeModel>();
		if(map != null && map.size() > 0){
			tree.addAll(map.get(String.valueOf(rootNo)));
			this.setTreeNodeChildren(tree,map);
		}
		else
			return null;

		return tree;
	}

	private void setTreeNodeChildren(List<TreeModel> tree,Map<String, ArrayList<TreeModel>> map) {

		if(tree != null && tree.size() > 0){
			for(TreeModel model : tree){
				String nodeId = model.getId();
				if(map.containsKey(nodeId)){
					model.setChildren(map.get(nodeId));
					model.setLeaf("false");
					//this.setTreeNodeChildren(map.get(nodeId), map);
				}
			}
		}
	}

	private Map<String,ArrayList<TreeModel>> convertToMap(List<BasOrgViewModel> list,int type) {
		Map<String,ArrayList<TreeModel>> map = new HashMap<String,ArrayList<TreeModel>>();

		if(list != null && list.size() > 0){
			for(BasOrgViewModel model : list){
				String parentNo = model.getParentNo();
				//将BasOrgViewModel转换为TreeModel
				TreeModel tempModel = this.convertaBasOrgViewModelToTreeModel(model,type);
				if(map.containsKey(parentNo)){
					map.get(parentNo).add(tempModel);
				}
				else{
					ArrayList<TreeModel> templist = new ArrayList<TreeModel>();
					templist.add(tempModel);
					map.put(parentNo,templist);
				}
			}
		}
		else
			return null;
		return map;

	}

	private TreeModel convertaBasOrgViewModelToTreeModel(BasOrgViewModel model,int type) {
		TreeModel treeModel = new TreeModel();

		treeModel.setChildren(new ArrayList<TreeModel>());

		treeModel.setExpanded("true");
		treeModel.setId(model.getNo());

		treeModel.setParentId(model.getParentNo());
		treeModel.setText(model.getName());

		Map<String,Object> map = new HashMap<String,Object>();

		if(type == 1 || type == 2){
			if(model.getParentNo().equals("0")){
				treeModel.setLeaf("false");
				map.put("Type3", 1);
			}
			else{
				treeModel.setLeaf("true");
				map.put("Type3", 2);
			}
		}
		else{
			if(model.getParentNo().equals("0"))
				map.put("Type3", 3);
			else
				map.put("Type3", 4);
			
			treeModel.setLeaf("false");
		}
		treeModel.setOthers(map);

		return treeModel;
	}


	//使用于: 附加:事业部=>厂区 or 厂区=>事业部 时加载车间和厂仓库
	private Map<String,ArrayList<TreeModel>> convertToMap2(List<BasOrgViewModel> list) {
		Map<String,ArrayList<TreeModel>> map = new HashMap<String,ArrayList<TreeModel>>();

		if(list != null && list.size() > 0){
			for(BasOrgViewModel model : list){
				String parentNo = model.getParentNo();
				//将BasOrgViewModel转换为TreeModel
				TreeModel tempModel = this.convertaBasOrgViewModelToTreeModel2(model);
				if(map.containsKey(parentNo)){
					map.get(parentNo).add(tempModel);
				}
				else{
					ArrayList<TreeModel> templist = new ArrayList<TreeModel>();
					templist.add(tempModel);
					map.put(parentNo,templist);
				}
			}
		}
		else
			return null;
		return map;
	}

	private TreeModel convertaBasOrgViewModelToTreeModel2(BasOrgViewModel model){
		TreeModel treeModel = new TreeModel();

		treeModel.setChildren(new ArrayList<TreeModel>());

		treeModel.setExpanded("true");
		treeModel.setId(model.getNo());
		treeModel.setLeaf("true");

		treeModel.setParentId(model.getParentNo());
		treeModel.setText(model.getName());

		Map<String,Object> map = new HashMap<String,Object>();
		map.put("Type3", 2);

		treeModel.setOthers(map);
		return treeModel;
	}

}
