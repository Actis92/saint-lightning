Search.setIndex({docnames:["_generated/lit_saint","architecture","augmentations","example_classification","example_regression","index","uncertainty"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,nbsphinx:3,sphinx:56},filenames:["_generated/lit_saint.rst","architecture.rst","augmentations.rst","example_classification.ipynb","example_regression.ipynb","index.rst","uncertainty.rst"],objects:{"":{lit_saint:[0,0,0,"-"]},"lit_saint.augmentations":{cutmix:[0,1,1,""],get_random_index:[0,1,1,""],mixup:[0,1,1,""]},"lit_saint.config":{AttentionTypeEnum:[0,2,1,""],AugmentationConfig:[0,2,1,""],ConstrastiveConfig:[0,2,1,""],ConstrativeEnum:[0,2,1,""],CutMixConfig:[0,2,1,""],DenoisingConfig:[0,2,1,""],MixUpConfig:[0,2,1,""],NetworkConfig:[0,2,1,""],OptimizerConfig:[0,2,1,""],PreTrainConfig:[0,2,1,""],PreTrainTaskConfig:[0,2,1,""],ProjectionHeadStyleEnum:[0,2,1,""],SaintConfig:[0,2,1,""],TrainConfig:[0,2,1,""],TransformerConfig:[0,2,1,""]},"lit_saint.config.AttentionTypeEnum":{col:[0,3,1,""],colrow:[0,3,1,""],row:[0,3,1,""]},"lit_saint.config.AugmentationConfig":{cutmix:[0,3,1,""],mixup:[0,3,1,""]},"lit_saint.config.ConstrastiveConfig":{constrastive_type:[0,3,1,""],dropout:[0,3,1,""],nce_temp:[0,3,1,""],projhead_style:[0,3,1,""],weight:[0,3,1,""]},"lit_saint.config.ConstrativeEnum":{simsiam:[0,3,1,""],standard:[0,3,1,""]},"lit_saint.config.CutMixConfig":{lam:[0,3,1,""]},"lit_saint.config.DenoisingConfig":{dropout:[0,3,1,""],scale_dim_internal_sepmlp:[0,3,1,""],weight_cross_entropy:[0,3,1,""],weight_mse:[0,3,1,""]},"lit_saint.config.MixUpConfig":{lam:[0,3,1,""]},"lit_saint.config.NetworkConfig":{batch_size:[0,3,1,""],dropout_embed_continuous:[0,3,1,""],embedding_size:[0,3,1,""],internal_dimension_embed_continuous:[0,3,1,""],num_workers:[0,3,1,""],transformer:[0,3,1,""]},"lit_saint.config.OptimizerConfig":{learning_rate:[0,3,1,""],other_params:[0,3,1,""]},"lit_saint.config.PreTrainConfig":{aug:[0,3,1,""],epochs:[0,3,1,""],optimizer:[0,3,1,""],task:[0,3,1,""]},"lit_saint.config.PreTrainTaskConfig":{contrastive:[0,3,1,""],denoising:[0,3,1,""]},"lit_saint.config.ProjectionHeadStyleEnum":{different:[0,3,1,""],same:[0,3,1,""]},"lit_saint.config.SaintConfig":{network:[0,3,1,""],pretrain:[0,3,1,""],train:[0,3,1,""]},"lit_saint.config.TrainConfig":{epochs:[0,3,1,""],internal_dimension_output_layer:[0,3,1,""],mlpfory_dropout:[0,3,1,""],optimizer:[0,3,1,""]},"lit_saint.config.TransformerConfig":{attention_type:[0,3,1,""],depth:[0,3,1,""],dim_head:[0,3,1,""],dropout:[0,3,1,""],heads:[0,3,1,""],scale_dim_internal_col:[0,3,1,""],scale_dim_internal_row:[0,3,1,""]},"lit_saint.datamodule":{SaintDatamodule:[0,2,1,""]},"lit_saint.datamodule.SaintDatamodule":{NAN_LABEL:[0,3,1,""],predict_dataloader:[0,4,1,""],prep:[0,4,1,""],prep_categorical_columns:[0,4,1,""],prep_continuous_columns:[0,4,1,""],scaler_continuous_columns:[0,4,1,""],set_predict_set:[0,4,1,""],set_pretraining:[0,4,1,""],test_dataloader:[0,4,1,""],train_dataloader:[0,4,1,""],val_dataloader:[0,4,1,""]},"lit_saint.dataset":{SaintDataset:[0,2,1,""]},"lit_saint.model":{Saint:[0,2,1,""]},"lit_saint.model.Saint":{configure_optimizers:[0,4,1,""],forward:[0,4,1,""],predict_step:[0,4,1,""],pretraining_step:[0,4,1,""],set_mcdropout:[0,4,1,""],set_pretraining:[0,4,1,""],shared_step:[0,4,1,""],test_step:[0,4,1,""],training:[0,3,1,""],training_step:[0,4,1,""],validation_step:[0,4,1,""]},"lit_saint.modules":{Attention:[0,2,1,""],GEGLU:[0,2,1,""],PreNorm:[0,2,1,""],Residual:[0,2,1,""],RowColTransformer:[0,2,1,""],SepMLP:[0,2,1,""],SimpleMLP:[0,2,1,""]},"lit_saint.modules.Attention":{forward:[0,4,1,""],training:[0,3,1,""]},"lit_saint.modules.GEGLU":{forward:[0,4,1,""],training:[0,3,1,""]},"lit_saint.modules.PreNorm":{forward:[0,4,1,""],training:[0,3,1,""]},"lit_saint.modules.Residual":{forward:[0,4,1,""],training:[0,3,1,""]},"lit_saint.modules.RowColTransformer":{forward:[0,4,1,""],forward_col:[0,4,1,""],forward_row:[0,4,1,""],training:[0,3,1,""]},"lit_saint.modules.SepMLP":{forward:[0,4,1,""],training:[0,3,1,""]},"lit_saint.modules.SimpleMLP":{forward:[0,4,1,""],training:[0,3,1,""]},"lit_saint.trainer":{SaintTrainer:[0,2,1,""]},"lit_saint.trainer.SaintTrainer":{fit:[0,4,1,""],get_model_from_checkpoint:[0,4,1,""],predict:[0,4,1,""],prefit:[0,4,1,""]},lit_saint:{augmentations:[0,0,0,"-"],config:[0,0,0,"-"],datamodule:[0,0,0,"-"],dataset:[0,0,0,"-"],model:[0,0,0,"-"],modules:[0,0,0,"-"],trainer:[0,0,0,"-"],version:[0,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","attribute","Python attribute"],"4":["py","method","Python method"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:attribute","4":"py:method"},terms:{"0":[0,2,3,4],"00001":4,"0001":0,"00028":0,"01":0,"01143348":3,"01208097":3,"01274193":3,"01303895":3,"0194":4,"02":[0,4],"025157":4,"027460":4,"034754":4,"0460937":4,"055031":4,"08629262":3,"08763281":3,"09048383":3,"1":[0,2,3,4,5,6],"10":[0,3,4],"100":0,"1033":4,"10374971":3,"108196":3,"11":3,"11085":3,"113293":4,"11464":3,"11528":3,"11559":4,"117":4,"118":4,"12":3,"120130":4,"122":4,"12th":3,"13":3,"1309571":4,"14":3,"1485445":4,"15":4,"150817":3,"16":0,"16907":4,"1704":0,"18":3,"1855":4,"19":3,"1e":0,"2":[0,1,2,3,4,6],"20":[0,3,4],"2016":6,"2066":4,"24":3,"2456":3,"248428":4,"25402":3,"256":0,"28":[3,4],"2993":3,"3":[0,1,2,3,4],"30":3,"300379":3,"305136":4,"32":4,"3257":3,"33":4,"34":4,"35":4,"363844":4,"37":4,"37724075":3,"38506672":3,"39":[3,4],"3906":4,"39455432":3,"4":[0,3,4],"40":3,"40183735":3,"4029758":4,"41":4,"41206264":3,"41838756":3,"42":[3,4],"420588":4,"42250738":3,"42264497":3,"42516899954601584":4,"42539898":3,"43":4,"43991593":3,"4458263":4,"44600":4,"44764405":3,"4482845":4,"4488404":3,"4545144":3,"46905848":3,"4766475":4,"4766954095214282":4,"4789042":4,"48":4,"4831934":3,"49567848":3,"5":[0,2,3,4,5],"5004":4,"50359756":4,"5043215":3,"50k":3,"5148988":4,"5157897":4,"51680666":3,"52":4,"5221":3,"5246242":4,"5290661":4,"5303789":4,"53094155":3,"5377241":4,"5454856":3,"55115956":3,"5523559":3,"5525124":4,"5595936":4,"56008404":3,"5674988":4,"57":4,"574601":3,"577355":3,"5774926":3,"58161247":3,"5879373":3,"594":3,"597403":4,"59816265":3,"6":[0,3,4],"6021758":4,"6054457":3,"6088008":4,"6113666":4,"61493325":3,"6227592":3,"6277379":4,"63":3,"64":0,"6628958":4,"67217":3,"6835245941402444":4,"685065":4,"69":3,"7":[3,4],"70":3,"702517":4,"732353":4,"76":4,"78":3,"7831":4,"79":3,"8":[0,3],"80":3,"800":4,"801":3,"80165":3,"802115":4,"8090":4,"823":4,"83":3,"86":3,"8636":4,"87":3,"88":4,"89":3,"8962503":3,"89700":4,"9":[3,4],"90":4,"905882":4,"9095162":3,"91":3,"9123672":3,"91370744":3,"94":3,"9614":4,"9700":4,"97400":4,"98":4,"986961":3,"987258":3,"98791903":3,"9885666":3,"99":0,"9th":3,"boolean":0,"case":[0,1,2,5,6],"class":[0,3,4,6],"default":[0,3,4,5],"do":[0,5],"enum":0,"final":1,"float":[0,4],"function":[0,1,6],"import":5,"int":0,"new":5,"return":[0,1,6],"static":0,"true":[0,3,4,5],"var":[3,4],"while":0,A:0,And:0,At:0,But:0,By:0,If:[0,5],In:[0,1,2,3,4,5,6],It:[0,1],Not:3,The:[0,3,4,5,6],Then:[1,3,4,5],There:[0,1],To:0,__class__:6,__name__:6,ab:0,about:6,abov:0,acc:0,acceler:0,accuraci:[0,3],across:[3,4],activ:[0,1,6],activation_modul:0,actual:0,ad:6,adam:0,add:[0,5],add_imag:0,addit:0,adm:3,adult:3,after:[0,1],afterward:0,algorithm:[0,6],all:[0,1,5,6],allow:[0,1],along:0,alreadi:3,also:[0,1],although:0,an:[0,1,2,5],ani:0,anoth:2,anyth:0,anytim:6,append:[0,1],appli:[0,1,2,6],applic:[1,5,6],approach:1,approxim:6,ar:[0,1,2,5],architectur:5,archiv:3,aren:5,arg:0,argmax:[0,3,5],argument:0,arrai:[3,4],arxiv:[0,5],as_fram:4,as_posix:3,assign:5,associ:0,attent:[0,1,3,4,5],attention_typ:0,attentiontypeenum:0,attn:0,aug:0,augment:[1,5],augmentationconfig:0,automat:0,avail:[0,6],avebedrm:4,aveoccup:4,averag:[0,2],averoom:4,avg:3,axessubplot:[3,4],axi:[3,4,5],back:0,backprop:0,backward:0,bar:0,base:[0,3],base_config:[3,4,5],basepredictionwrit:0,batch:0,batch_idx:0,batch_siz:[0,3],bayesian:6,becom:6,been:0,befor:[0,5],begin:5,being:0,below:0,best:0,between:[0,1,2],binari:0,bit:0,block:[0,4],bool:0,both:[0,1],calcul:0,california:4,call:[0,6],callback:0,can:[0,1,3,4,5,6],care:0,carlo:5,cat_col:0,categor:[0,1,5],categori:[0,3,4,5],categorical_dim:[3,4,5],censu:3,center:[3,4],cfg:[3,4,5],check:5,checkpoint:0,child:3,choos:0,classif:[0,1,5],classification_report:3,cleric:3,clever:6,closur:0,code:6,col:[0,1],colleg:3,colrow:0,column:[0,1,3,4,5],com:5,combin:[0,1,2],common:0,compon:5,compos:[3,4],comput:[0,1,3,4],con_col:0,concat:[3,4],condit:0,conf:5,config:[3,4,5],config_nam:[3,4],config_path:[3,4],config_stor:[3,4],configstor:[3,4],configur:[0,5],configure_optim:0,connect:0,consid:[1,3,4,5],consist:[0,1],constrast:0,constrastive_typ:0,constrastiveconfig:0,constrativeenum:0,contain:[0,3,4,5],continu:[0,1,3,4,5],continuo:0,contrast:[0,1],control:0,convert:[0,5],core:[0,3,4],correctli:5,correspond:0,cosineann:0,could:0,craft:3,creat:[0,5],cross:1,cs:[3,4],csv:3,current:0,custom:0,cutmix:[0,1,5],cutmixconfig:0,cycl:0,d:0,dai:5,data:[0,1,5,6],data_loader_param:[0,3],data_modul:[3,4,5,6],databas:[0,3],datafram:[0,3,4,5],dataload:0,dataloader_idx:0,datamodul:[3,4,5,6],dataset:[2,3,4,5,6],datetim:5,ddp_spawn:0,decid:0,decod:0,deep:1,deepspe:0,def:0,defin:[0,5],definit:0,denois:[0,1],denoisingconfig:0,depth:0,describ:0,devic:0,df:[0,3,4,5,6],df_test:[3,4,5,6],df_to_predict:5,df_train:[3,4],df_val:[3,4],dict:0,dictionari:0,differ:[0,1,2,5,6],dim:0,dim_head:0,dim_intern:0,dim_out:0,dim_out_for_each_feat:0,dim_target:[0,3,4,5],dimens:[0,6],dis_opt:0,dis_sch:0,disabl:0,disk:0,displai:0,divid:0,divorc:3,dm:0,doe:6,doesn:6,dollar:4,don:0,download:5,drop:[5,6],dropout:[0,1,5],dropout_embed_continu:0,dtype:[3,4],dure:[0,5,6],e:[0,5],each:[0,1,2],edu:3,element:0,els:3,embed:[0,1,6],embedding_s:0,enabl:0,enable_pretrain:[0,3,4,5],encod:0,end:0,enforc:0,enhanc:1,entropi:1,enumer:0,epoch:[0,3,4,5],equal:6,error:0,estim:[0,5],eval:0,everi:0,exampl:[0,5],example_imag:0,exce:3,execut:0,exist:3,exist_ok:3,experi:0,expl_vari:4,explain:4,explained_variance_scor:4,exponentiallr:0,extract:5,f1:3,f:[4,5],factor:0,factori:0,fals:0,famili:3,fancier:0,featur:[0,1,5],feed:0,femal:3,fetch_california_h:4,ff:0,ff_dropout:0,fig:2,file:[3,4,5],file_nam:5,fill:5,find:[0,5,6],first:[0,3,4],fit:[0,5],flag:0,float32:[3,4,5],float64:5,fn:0,focu:[3,4],follow:[3,4,5],former:0,forward:0,forward_col:0,forward_row:0,found:0,fp:5,frame:4,framework:5,frequenc:0,from:[0,1,2,3,4,5,6],full:0,g:0,gal:6,gan:0,gate:0,gaussian:6,geglu:0,gelu:0,gen_opt:0,gen_sch:0,gener:[0,2],get:[0,1,6],get_model_from_checkpoint:0,get_random_index:0,getcwd:3,ghahramani:6,github:5,given:[0,1,3,4],global:[3,4],goe:0,gov:3,gpu:0,grad:3,gradient:0,greatest:6,grid:0,ground:6,gt:[3,4],ha:[0,6],half:0,handl:0,happen:0,have:[0,2,5,6],head:[0,3,4],header:3,here:0,hidden:0,hist:[3,4],hook:0,hous:4,houseag:4,household:4,how:[0,3,4],hs:3,http:[0,3,5],hydra:[3,4,5],i:5,ic:3,ignor:0,imag:[0,2],implement:[0,5],impli:0,improv:[0,6],includ:[0,1],incom:3,independ:1,index:[0,5],indic:0,infer:0,inform:5,initi:[0,3,4],inplac:0,input:[0,1],insid:5,instanc:[0,3,4,5],instead:[0,2,5],int32:5,int64:5,integ:0,interest:0,intern:0,internal_dimension_embed_continu:0,internal_dimension_output_lay:0,interpret:6,intersampl:[0,5],interv:0,item:0,iter:[0,3,4,6],its:[0,6],kei:0,keyword:0,know:0,known:6,kwarg:0,label:[0,1,5,6],labelencod:0,labels_hat:0,lam:[0,2],lambdalr:0,last:0,latitud:4,latter:0,layer:[0,1,6],lbfg:0,learn:[0,1,3,6],learning_r:0,learningratemonitor:0,len:0,librari:5,lightn:0,lightningdatamodul:0,lightningmodul:[0,6],like:[0,5],line:5,linear:[0,1],list:0,lit:5,lit_saint:[3,4,5],load:0,log:0,log_dict:0,logger:0,logic:0,logit:[0,1],longitud:4,loss:[0,1],loss_fn:0,lr:0,lr_dict:0,lr_schedul:0,lstm:0,lt:[3,4],m:6,machin:3,macro:3,made:0,mae:4,make:[0,5],make_grid:0,male:3,mani:[0,6],marri:3,mask:0,mathemat:6,max_epoch:[3,4,5],mc_dropout:0,mc_dropout_iter:[0,3,4,6],mc_predict:[3,4],mcdropout:[0,6],mean:0,mean_absolute_error:4,mean_squared_error:4,measur:4,medhousev:4,median:4,medinc:4,mention:0,method:[0,1],metric:[0,3,4],metric_to_track:0,metric_v:0,might:0,miss:5,mixup:[0,1,5],mixupconfig:0,mkdir:3,ml:3,mlp:0,mlpfory_dropout:0,mode:0,model:[5,6],model_di:0,model_gen:0,model_select:[3,4],modul:[5,6],monitor:0,mont:5,more:5,most:0,mse:[1,4],multi:0,multipl:0,multipli:0,must:[0,1,5],mymodel:0,n_class:6,n_critic:0,n_iter:6,n_sampl:6,name:[0,3,4,5],nan:5,nan_label:0,nce_temp:0,ndarrai:0,need:[0,5],network:[0,3,4,5,6],networkconfig:0,neural:[0,1],neuron:6,never:[0,3],next:0,nfeat:0,nn:0,node:[3,4],nois:1,non:1,none:[0,3],normal:0,note:0,notebook:[3,4],np:[3,4,5],num_work:[0,3,4],number:[0,3,6],numer:[0,5],numerical_column:[3,4,5],numpi:[3,4],object:[0,1,3,4,5],obtain:[0,1,6],offici:5,often:[0,6],omegaconf:5,one:[0,1,5],ones:[1,5],onli:0,oom:0,open:5,oper:0,optim:0,optimizer1:0,optimizer2:0,optimizer_idx:0,optimizer_on:0,optimizer_step:0,optimizer_two:0,optimizerconfig:0,option:0,order:[0,1,5],ordinalencod:0,org:0,origin:[0,1,2],os:3,other:[2,3],other_param:0,otherwis:[0,3,4,6],our:[3,4],out:[0,3,6],output:[0,6],over:[0,1],overrid:0,overridden:0,own:[0,3],packag:5,page:5,pair:2,panda:[3,4],paper:5,param:0,paramet:[0,3,4],paramref:0,parent:3,part:[0,3,4],pass:0,patch:2,path:3,pathlib:3,pd:[3,4],perform:[0,1,6],permut:[0,2],phase:0,pip:5,pixel:2,popul:4,posit:2,possibl:[0,6],pre:1,precict:0,precis:[0,3],predict:[0,1,5,6],predict_dataload:0,predict_set:3,predict_step:[0,6],predicts_step:0,prefit:0,prenorm:0,prep:0,prep_categorical_column:0,prep_continuous_column:0,prepar:5,preprocess:0,present:[0,2],pretra:0,pretrain:[0,3,4,5],pretrainconfig:0,pretraining_step:0,pretraintaskconfig:0,prevent:0,previou:0,print:[3,4],privat:3,probabilist:6,probabl:0,problem:[0,1,3,4,5,6],procedur:0,process:[0,6],produc:0,progress:0,project:0,projectionheadstyleenum:0,projhead_styl:0,propag:0,propos:6,provid:6,pseudocod:0,put:0,pytorch:[0,5],pytorch_lightn:[0,3,4],random:[0,2],random_index:0,random_st:[3,4],rate:0,read:[3,4],read_csv:3,real:2,realiz:6,reason:6,recal:3,recip:0,reconstruct:[0,1],reducelronplateau:0,region:2,regist:0,regress:[1,5,6],regular:6,rel:3,relu:0,rememb:6,remov:2,repair:3,replac:2,repo:5,repositori:5,repres:0,requir:0,residu:0,result:[1,6],routin:0,row:[0,1,5,6],rowcol:1,rowcoltransform:[0,1],run:0,runtim:5,s:[0,1,6],saint:[0,1],saint_nan:[0,5],saint_train:[3,4,5,6],saintconfig:[0,3,4,5],saintdatamodul:[0,3,4,5],saintdataset:0,sainttrain:[0,3,4,5,6],sale:3,same:[0,6],sampl:6,sample_img:0,save:[0,5],scale:[0,5],scale_dim_intern:0,scale_dim_internal_col:0,scale_dim_internal_row:0,scale_dim_internal_sepmlp:0,scaler:[0,5],scaler_continuous_column:0,scarc:1,schedul:0,scheduler1:0,scheduler2:0,scikit:0,score:3,scriptmodul:0,search:5,second:0,section:1,see:[0,3,4],seed:[3,4],seed_everyth:[3,4],self:[0,1,5,6],selfattent:1,separ:[0,1],sepmlp:[0,1],sequenti:0,servic:3,set:[0,3,4,5,6],set_mcdropout:0,set_predict_set:0,set_pretrain:0,sgd:0,share:0,shared_step:0,should:0,show:[3,4],shown:0,silent:0,similar:[0,1],simplemlp:[0,1],simpli:[0,2,6],simplifi:0,simsiam:0,sinc:0,singl:0,size:0,skip:0,sklearn:[3,4],slice:0,smooth:0,so:[0,3,4,6],solv:1,some:[0,2,3,4,5],somepago:5,someth:0,sourc:0,space:6,spawn:0,specif:0,specifi:[0,5,6],split:[0,3,4,5],split_column:[0,3,4,5],standard:[0,6],standardscal:[0,5],start:5,startswith:6,state:[0,3],step:[0,5,6],stop:0,store:[3,4],str:0,strategi:2,strict:0,string:3,style:0,su:0,subclass:0,submodul:5,subset:2,suggest:5,sum:0,supervis:1,support:[0,3],sure:0,t:[0,5,6],t_co:0,t_max:0,tabular:1,taht:0,take:0,taken:0,target:[0,1,3,4,5],target_categor:0,task:[0,1],techniqu:[5,6],tell:0,temperatur:0,tensor:[0,2],test:[0,5,6],test_acc:0,test_batch:0,test_data:0,test_dataload:0,test_epoch_end:0,test_loss:0,test_out:0,test_siz:[3,4],test_step:0,text:0,thank:5,them:[0,1,5],thi:[0,1,2,3,4,5,6],thing:0,those:0,through:0,thu:0,time:[0,6],titl:[3,4],torch:0,torchvis:0,total:0,tpu:0,tpu_cor:0,train:[0,2,3,4,5,6],train_dataload:0,train_test_split:[3,4],trainabl:6,trainconfig:0,trainer:[3,4,5],training_step:0,tranform:0,transform:[0,1,5,6],transformerconfig:0,transformermixin:0,treat:6,tri:1,truncat:0,truncated_bptt_step:0,tupl:0,turn:6,two:0,type:[0,1,5],uci:3,uncertainti:5,uncom:[3,4],uniqu:0,unit:[0,3],unless:5,until:0,updat:0,url:3,us:[0,1,3,4],util:0,val:0,val_acc:0,val_batch:0,val_data:0,val_dataload:0,val_loss:0,val_out:0,valid:[0,3,4,5],validation_epoch_end:0,validation_step:0,validation_step_end:0,valu:[0,1,2,3,4,5,6],var_predict:[3,4],varianc:[3,4],version:[2,5],w:5,wai:[5,6],want:[0,3,4,5],warn:0,wasserstein:0,we:[1,2,3,4,5,6],websit:5,week:5,weight:[0,2,3],weight_cross_entropi:0,weight_ms:0,well:6,wget:3,what:0,whatev:0,when:[0,1,6],where:[1,5,6],wherea:0,whether:3,which:[0,3,4],white:3,whose:0,within:[0,4],without:0,won:0,work:6,worker:[3,4],would:5,write:0,x:0,x_categ:0,x_cont:0,y:0,you:[0,3,4,5],your:[0,5],yr:3,z:0,zero:[5,6]},titles:["lit_saint package","Network Architecture","Data Augmentation Techniques","Example Classification","Example Regression","Welcome to SAINT Lightning\u2019s documentation!","Uncertainty Estimation"],titleterms:{"import":[3,4],architectur:1,augment:[0,2],carlo:6,classif:3,compon:1,config:0,configur:[3,4],content:[0,5],credit:5,cutmix:2,data:[2,3,4],datamodul:0,dataset:0,document:5,download:[3,4],dropout:6,estim:[3,4,6],exampl:[3,4],fit:[3,4],gener:5,how:[5,6],implement:6,indic:5,instal:5,librari:[3,4],lightn:5,lit:[3,4],lit_saint:0,make:[3,4],mixup:2,model:[0,3,4],modul:0,mont:6,network:1,packag:0,predict:[3,4],prepar:[3,4],preprocess:5,pretrain:1,regress:4,s:5,saint:[3,4,5],step:1,submodul:0,tabl:5,techniqu:2,train:1,trainer:0,uncertainti:[3,4,6],us:[5,6],version:0,welcom:5,yaml:5}})