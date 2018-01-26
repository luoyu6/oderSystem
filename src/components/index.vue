<template>
	<div class="order">
		<div class="main-right">
			<el-row>
				<el-col :span="12" class="orderList">
					<el-tabs>
						<el-tab-pane label="已选">
							<el-table :data="tableData" border style="width: 100%" :default-sort="{prop: 'date'}">
								<el-table-column prop="goodsName" label="名称" sortable width="180">
								</el-table-column>
								<el-table-column prop="count" label="量">
								</el-table-column>
								<el-table-column prop="price" label="价格">
								</el-table-column>
								<el-table-column prop="operation" label="操作">
									<template scope="scope">
										<el-button class="btns" @click="add(scope.row)" type="text" size="small">增加</el-button>
										<el-button class="btns" type="text" size="small">减少</el-button>
										<el-button class="btns" @click="del(scope.row)" type="text" size="small">删除</el-button>
									</template>
								</el-table-column>
							</el-table>
							<div style="margin-left: 15rem;">
								<el-button type="success" @click="deleAll">删除</el-button>
								<el-button type="danger">挂单</el-button>
								<el-button type="info">结账</el-button>
							</div>
						</el-tab-pane>

						<el-tab-pane label="优惠卡">优惠卡</el-tab-pane>
						<el-tab-pane label="外卖">外卖</el-tab-pane>
					</el-tabs>
				</el-col>
				<el-col :span="12" class="often-good-list">
					<h2>常用商品</h2>
					<div class="often-good-wrap">
						<ul style="display: table;">
							<li class="good-item" v-for="goods in oftenGoods" @click="add(goods)">
								<span>{{goods.goodsName}} <span class="text-price">￥{{goods.price}}</span></span>
							</li>
						</ul>
						<div class="often-Tab">
							<el-tabs>
								<el-tab-pane label="主食">
									<div>
										<ul class='cookList'>
											<li v-for="goods in type0Goods" @click="add(goods)">
												<span class="foodImg">
                                            <img :src="goods.goodsImg" width="100%">
                                        </span>
												<span class="foodName">{{goods.goodsName}}</span>
												<span class="foodPrice">￥{{goods.price}}元</span>
											</li>
										</ul>

									</div>
								</el-tab-pane>
								<el-tab-pane label="饮料">
									<div>
										<ul class='cookList'>
											<li v-for="goods in type1Goods" @click="add(goods)">
												<span class="foodImg">
                                            <img :src="goods.goodsImg" width="100%">
                                        </span>
												<span class="foodName">{{goods.goodsName}}</span>
												<span class="foodPrice">￥{{goods.price}}元</span>
											</li>
										</ul>

									</div>
								</el-tab-pane>
								<el-tab-pane label="套餐">
									<div>
										<ul class='cookList'>
											<li v-for="goods in type2Goods" @click="add(goods)">
												<span class="foodImg">
                                            <img :src="goods.goodsImg" width="100%">
                                        </span>
												<span class="foodName">{{goods.goodsName}}</span>
												<span class="foodPrice">￥{{goods.price}}元</span>
											</li>
										</ul>

									</div>
								</el-tab-pane>
								<el-tab-pane label="零食">
									<div>
										<ul class='cookList'>
											<li v-for="goods in type3Goods" @click="add(goods)">
												<span class="foodImg">
                                            <img :src="goods.goodsImg" width="100%">
                                        </span>
												<span class="foodName">{{goods.goodsName}}</span>
												<span class="foodPrice">￥{{goods.price}}元</span>
											</li>
										</ul>

									</div>
								</el-tab-pane>
							</el-tabs>

						</div>
					</div>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import 'element-ui/lib/theme-default/index.css'

	export default {
		name: 'hello',
		created() {
			//           在这里读取数据有的写法有两种方式  es6和es5
			//					es6的写法:
			//			//读取常用商品列表
			//			axios.get('http://jspang.com/DemoApi/oftenGoods.php')
			//				.then(response => {
			//					//console.log(response);
			//					this.oftenGoods = response.data;
			//				})
			//				.catch(error => {
			//					console.log(error);
			//					alert('网络错误，不能访问');
			//				})
			//			//读取分类商品列表
			//			axios.get('http://jspang.com/DemoApi/typeGoods.php')
			//				.then(response => {
			//					//console.log(response);
			//					//this.oftenGoods=response.data;
			//					this.type0Goods = response.data[0];
			//					this.type1Goods = response.data[1];
			//					this.type2Goods = response.data[2];
			//					this.type3Goods = response.data[3];
			//
			//				})
			//				.catch(error => {
			//					console.log(error);
			//					alert('网络错误，不能访问');
			//				})

			this.goodsList();
		},
		data() {
			return {
				tableData: [], //订单列表的值
				oftenGoods: [],
				typeGoods: [],
				type0Goods: [],
				type1Goods: [],
				type2Goods: [],
				type3Goods: [],
				totalMoney: 0, //订单总价格
				totalCount: 0 //订单商品总数量

			}
		},
		methods: {
			//读取常用商品列表
			goodsList() {
				var self = this;
				//				axios.get(url)==this.http.get(url)
				//				response=>{}==function(response){}
				this.http.get('static/oftenGoods.json').then(function(response) {
					self.oftenGoods = response.data;
				}).catch(function(error) {
					console.log(error);
				})
				//读取分类商品列表
				this.http.get('static/typeGoods.json').then(function(response) {
					self.typeGoods = response.data;
					self.type0Goods = response.data[0];
					self.type1Goods = response.data[1];
					self.type2Goods = response.data[2];
					self.type3Goods = response.data[3];
					//					alert(self.type0Goods)
				}).catch(function(error) {
					console.log(error);
				})

			},

			add(goods) {
				this.totalCount = 0; //汇总数量清0
				this.totalMoney = 0;
				let isHave = false;
				//判断是否这个商品已经存在于订单列表
				for(let i = 0; i < this.tableData.length; i++) {
					console.log(this.tableData[i].goodsId);
					if(this.tableData[i].goodsId == goods.goodsId) {
						isHave = true; //存在
					}
				}
				//根据isHave的值判断订单列表中是否已经有此商品
				if(isHave) {
					//存在就进行数量添加
					let arr = this.tableData.filter(o => o.goodsId == goods.goodsId);
					arr[0].count++;
					//console.log(arr);
				} else {
					//不存在就推入数组
					let newGoods = {
						goodsId: goods.goodsId,
						goodsName: goods.goodsName,
						price: goods.price,
						count: 1
					};
					this.tableData.push(newGoods);

				}

				//进行数量和价格的汇总计算
				this.tableData.forEach((element) => {
					this.totalCount += element.count;
					this.totalMoney = this.totalMoney + (element.price * element.count);
				});
			},

			del(goods) {
				this.tableData = this.tableData.filter(o => o.goodsId != goods.goodsId);
				this.getTatalMoney();
			},

			getTatalMoney() {
				this.totalCount = 0;
				this.totalMoney = 0;
				if(this.tableData) {
					this.tableData.forEach((element) => {
						this.totalCount += element.count;
						this.totalMoney = this.totalMoney + (element.price * element.count);
					});
				}
			},

			deleAll() {
				this.totalCount = 0;
				this.totalMoney = 0;
				this.tableData = [];
			}

		}

	}
</script>

<style scoped>
	.main-right {
		width: 95rem;
		float: left;
		margin-left: 5.2rem;
	}
	
	.orderList {
		background: #F8FAFB;
	}
	
	.often-good-list {
		background: #F9FAFC;
		border-left: 1px solid #D1DBE5;
	}
	
	.often-good-list h2 {
		height: 41px;
		line-height: 41px;
		background: #F9FAFC;
		border-bottom: 1px solid #D1DBE5;
	}
	
	.good-item {
		float: left;
		margin: 4px;
		background: #FEFEFD;
		height: 30px;
		line-height: 30px;
		display: table;
		text-align: center;
		padding: 0 4px;
		min-width: 110px;
	}
	
	.btns {
		margin: 0;
	}
	
	.text-price {
		color: #97C2E0;
	}
	
	.often-Tab {
		background: #EFF2F7;
	}
	
	.cookList li {
		list-style: none;
		width: 23%;
		border: 1px solid #E5E9F2;
		height: auot;
		overflow: hidden;
		background-color: #fff;
		padding: 2px;
		float: left;
		margin: 2px;
		cursor: pointer;
		text-align: center;
	}
	
	.cookList li span {
		display: block;
		float: left;
	}
	
	.foodImg {
		width: 100%;
	}
	
	.foodName {
		font-size: 16px;
		margin-left: 15px;
		color: brown;
	}
	
	.foodPrice {
		font-size: 14px;
		padding: 0 10px;
	}
	
	.totalDiv {
		height: auot;
		overflow: hidden;
		text-align: right;
		font-size: 16px;
		background-color: #fff;
		border-bottom: 1px solid #E5E9F2;
		padding: 10px;
	}
</style>