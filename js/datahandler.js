 
//===============Start Mosy queries-============ 

    //Start get  inspection_logs Data ===============
    
      function get_inspection_logs(inspection_logs_colstr, inspection_logs_filter_col, inspection_logs_cols, inspection_logs_node_function_name, inspection_logs_callback_function_string, inspection_logs_ui_tag, inspection_logs_pagination, req_url="")
      {
        mosyflex_sel("inspection_logs", inspection_logs_colstr, inspection_logs_filter_col , inspection_logs_cols, inspection_logs_node_function_name, inspection_logs_callback_function_string, inspection_logs_ui_tag, inspection_logs_pagination,req_url);
        
      }
    //End get  inspection_logs Data ===============

    //Start insert  inspection_logs Data ===============

	function add_inspection_logs(inspection_logs_cols, inspection_logs_vals, inspection_logs_callback_function_string)
    {
		
        mosyajax_create_data("inspection_logs", inspection_logs_cols, inspection_logs_vals, inspection_logs_callback_function_string);
     }
     
    //End insert  inspection_logs Data ===============

    
    //Start update  inspection_logs Data ===============

    function update_inspection_logs(inspection_logs_update_str, inspection_logs_where_str, inspection_logs_callback_function_string){
    
		mosyajax_update("inspection_logs", inspection_logs_update_str, inspection_logs_where_str, inspection_logs_callback_function_string)
    
    }
    //end  update  inspection_logs Data ===============

	//Start drop  inspection_logs Data ===============
    function inspection_logs_drop(inspection_logs_where_str, inspection_logs_callback_function_string)
    {
        mosyajax_drop("inspection_logs", inspection_logs_where_str, inspection_logs_callback_function_string)

    }
	//End drop  inspection_logs Data ===============
    
    function initialize_inspection_logs(qstr="", inspection_logs_callback_function_string="",req_url="")
    {
    
    ///alert(qstr);
      var inspection_logs_token_query =qstr;
      if(qstr=="")
      {
       var inspection_logs_token_query_param="";
       var inspection_logs_js_uptoken=mosy_get_param("inspection_logs_uptoken");
       //alert(inspection_logs_js_uptoken);
       if(inspection_logs_js_uptoken!==undefined)
       {
       
        inspection_logs_token_query_param = atob(inspection_logs_js_uptoken);
       }
        inspection_logs_token_query = " where primkey='"+(inspection_logs_token_query_param)+"'";
        
           if (document.getElementById("inspection_logs_uptoken") !==null) {
           	if(document.getElementById("inspection_logs_uptoken").value!="")
            {
            
            var inspection_logs_atob_tbl_key =atob(document.getElementById("inspection_logs_uptoken").value);
            
                   
            inspection_logs_token_query = " where primkey='"+(inspection_logs_atob_tbl_key)+"'";

            }
           }
      }
      
      var inspection_logs_push_ui_data_to =inspection_logs_callback_function_string;
      if(inspection_logs_callback_function_string=="")
      {
      inspection_logs_push_ui_data_to = "add_inspection_logs_ui_data";
      }
                
      console.log(inspection_logs_token_query+" -- "+inspection_logs_js_uptoken);

	  //alert(inspection_logs_push_ui_data_to);

     get_inspection_logs("*", inspection_logs_token_query, "primkey", "blackhole", inspection_logs_push_ui_data_to, "", "", req_url);
     
     ///get_inspection_logs(inspection_logs_colstr, inspection_logs_filter_col, inspection_logs_cols, inspection_logs_node_function_name, inspection_logs_callback_function_string, inspection_logs_ui_tag, inspection_logs_pagination, req_url="")
    }
    
    function add_inspection_logs_ui_data(inspection_logs_server_resp) 
    {
    
    ///alert(inspection_logs_server_resp);
    
    var json_decoded_str=JSON.parse(inspection_logs_server_resp)[0];
    
      var keys = Object.keys(json_decoded_str);

      for (var i = 0; i < keys.length; i++) {
          var val = json_decoded_str[keys[i]];
          ///console.log(" Key -- "+keys[i]+" val -- "+val);
          
          mosy_push_data("txt_"+keys[i], val);
          mosy_push_data("txt_"+keys[i]+"_disp", val);
          mosy_push_data("div_txt_"+keys[i], val);
          mosy_push_data("src_"+keys[i], val);
          mosy_push_data("href_"+keys[i], val);
          mosy_push_data("sel_"+keys[i], val);
          mosy_push_data_class("mosy_data_"+keys[i], val);
          
          // use val
      }
        
    }
    

    ///=============== load inspection_logs data on the fly ==============
    
	var gft_inspection_logs_str="(skey LIKE '%{{qinspection_logs}}%' OR  section_code LIKE '%{{qinspection_logs}}%' OR  station_id LIKE '%{{qinspection_logs}}%' OR  to_station LIKE '%{{qinspection_logs}}%' OR  starting_xy LIKE '%{{qinspection_logs}}%' OR  end_xy LIKE '%{{qinspection_logs}}%' OR  speed_limit LIKE '%{{qinspection_logs}}%' OR  status LIKE '%{{qinspection_logs}}%' OR  section_type LIKE '%{{qinspection_logs}}%' OR  added_on LIKE '%{{qinspection_logs}}%' OR  setion_description LIKE '%{{qinspection_logs}}%' OR  zone LIKE '%{{qinspection_logs}}%' OR  line_id LIKE '%{{qinspection_logs}}%' OR  line_name LIKE '%{{qinspection_logs}}%' OR  from_stn_name LIKE '%{{qinspection_logs}}%' OR  issue LIKE '%{{qinspection_logs}}%' OR  description LIKE '%{{qinspection_logs}}%' OR  location LIKE '%{{qinspection_logs}}%' OR  severity LIKE '%{{qinspection_logs}}%' OR  added_by LIKE '%{{qinspection_logs}}%')";
    
    function  gft_inspection_logs(qinspection_logs_str)
    {
        	var clean_inspection_logs_filter_str=gft_inspection_logs_str.replace(/{{qinspection_logs}}/g, magic_clean_str(qinspection_logs_str));
            
            return  clean_inspection_logs_filter_str;

    }
    
    function load_inspection_logs(inspection_logs_qstr, inspection_logs_where_str, inspection_logs_ret_cols, inspection_logs_user_function, inspection_logs_result_function, inspection_logs_data_tray, req_url="")
    {
    
    var finspection_logs_result_function="push_result";
      
    if(inspection_logs_result_function!="")
    {
          var finspection_logs_result_function=inspection_logs_result_function;

    }
    	var clean_inspection_logs_filter_str=gft_inspection_logs_str.replace(/{{qinspection_logs}}/g, magic_clean_str(inspection_logs_qstr));
        
        var finspection_logs_where_str=" where "+clean_inspection_logs_filter_str;

    if(inspection_logs_where_str!="")
    {
          var finspection_logs_where_str=" "+inspection_logs_where_str;

    }
       
      get_inspection_logs("*", finspection_logs_where_str, inspection_logs_ret_cols, inspection_logs_user_function, finspection_logs_result_function, inspection_logs_data_tray,"",req_url);
      ////get_inspection_logs(inspection_logs_colstr, inspection_logs_filter_col, inspection_logs_cols, inspection_logs_node_function_name, inspection_logs_callback_function_string, inspection_logs_ui_tag, inspection_logs_pagination, req_url="")
    }
    ///=============== load inspection_logs data on the fly ==============


 ///=quick load 
 
function qkload_inspection_logs(qstr, push_fun="", ui_card="", and_query="", additional_cols="", inspection_logs_pagination="",req_url="")
{

	var inspection_logs_list_nodes_str=inspection_logs_list_nodes;
  
   if(ui_card!="")
   {
      inspection_logs_list_nodes_str=ui_card;
   }
   
   var inspection_logs_qret_fun="push_grid_result:inspection_logs_tbl_list";
   
   if(push_fun!="")
   {
    inspection_logs_qret_fun=push_fun;
   }
   
   var combined_query ="";
   
   if(and_query!="")
   {
   combined_query=" and "+and_query;
   }
   
   var additional_cols_str=","+additional_cols;
   
   if(additional_cols=="")
   {
   	 additional_cols_str="";
   }
   
   get_inspection_logs("*", ajaxw+" ("+gft_inspection_logs(qstr)+") "+combined_query+"  order by primkey desc ", inspection_logs_list_cols+additional_cols_str, "",inspection_logs_qret_fun, "c=>"+inspection_logs_list_nodes_str, inspection_logs_pagination, req_url);
   ///get_inspection_logs(inspection_logs_colstr, inspection_logs_filter_col, inspection_logs_cols, inspection_logs_node_function_name, inspection_logs_callback_function_string, inspection_logs_ui_tag, inspection_logs_pagination, req_url="")               
}


////////////// arithmetic function 


//count 

function count_inspection_logs(where_str, push_to, callback_function_string="", num_form="yes", req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_num_data";

        }
      
      }
      
   get_inspection_logs("count(*) as tot_item_count", qwhere_str, "tot_item_count", "",""+callback_function_string_str+":"+push_to+"|tot_item_count", "","",req_url);
   ///get_inspection_logs(inspection_logs_colstr, inspection_logs_filter_col, inspection_logs_cols, inspection_logs_node_function_name, inspection_logs_callback_function_string, inspection_logs_ui_tag, inspection_logs_pagination, req_url="") 

}


//qddata
function qinspection_logs_ddata(where_str, disp_col , push_to, callback_function_string="",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_ddata";

      
      }
      
   get_inspection_logs("*", qwhere_str, disp_col, "", ""+callback_function_string_str+":"+push_to+"|"+disp_col+"", "","",req_url);
   ///get_inspection_logs(inspection_logs_colstr, inspection_logs_filter_col, inspection_logs_cols, inspection_logs_node_function_name, inspection_logs_callback_function_string, inspection_logs_ui_tag, inspection_logs_pagination, req_url="")    

}



//sum 

function sum_inspection_logs(sum_col, where_str, push_to, callback_function_string="", num_form="yes",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_ddata";

        }
      
      }
      
   get_inspection_logs("sum("+sum_col+") as tot_item_sum", qwhere_str, "tot_item_sum", "",""+callback_function_string_str+":"+push_to+"|tot_item_sum", "","",req_url);
   ///get_inspection_logs(inspection_logs_colstr, inspection_logs_filter_col, inspection_logs_cols, inspection_logs_node_function_name, inspection_logs_callback_function_string, inspection_logs_ui_tag, inspection_logs_pagination, req_url="")

}


///request handlers 

function inspection_logs_ins_(formid, required_inp=null, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "inspection_logs_insert_btn", callback_function_string_str, req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
}

function inspection_logs_updt_(formid, required_inp, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }

	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "inspection_logs_update_btn", callback_function_string_str,req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
      

}


function inspection_logs_rem_(req_token, callback_function_string="",req_url="")
{


	///alert(req_token+" --"+callback_function_string);

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get('conf_deleteinspection_logs&inspection_logs_uptoken='+magic_clean_str(req_token)+'', callback_function_string_str,req_url="");

}


function grid_inspection_logs_updt_(updt_key,colstr,newcolval, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get("_grid_updt_="+btoa('inspection_logs')+"&updt_key="+btoa(updt_key)+"&colstr="+btoa(colstr)+"&newcolval="+btoa(newcolval)+"&editor="+btoa('primkey')+"", callback_function_string_str,req_url="");

}
   

    //Start get  line_manager Data ===============
    
      function get_line_manager(line_manager_colstr, line_manager_filter_col, line_manager_cols, line_manager_node_function_name, line_manager_callback_function_string, line_manager_ui_tag, line_manager_pagination, req_url="")
      {
        mosyflex_sel("line_manager", line_manager_colstr, line_manager_filter_col , line_manager_cols, line_manager_node_function_name, line_manager_callback_function_string, line_manager_ui_tag, line_manager_pagination,req_url);
        
      }
    //End get  line_manager Data ===============

    //Start insert  line_manager Data ===============

	function add_line_manager(line_manager_cols, line_manager_vals, line_manager_callback_function_string)
    {
		
        mosyajax_create_data("line_manager", line_manager_cols, line_manager_vals, line_manager_callback_function_string);
     }
     
    //End insert  line_manager Data ===============

    
    //Start update  line_manager Data ===============

    function update_line_manager(line_manager_update_str, line_manager_where_str, line_manager_callback_function_string){
    
		mosyajax_update("line_manager", line_manager_update_str, line_manager_where_str, line_manager_callback_function_string)
    
    }
    //end  update  line_manager Data ===============

	//Start drop  line_manager Data ===============
    function line_manager_drop(line_manager_where_str, line_manager_callback_function_string)
    {
        mosyajax_drop("line_manager", line_manager_where_str, line_manager_callback_function_string)

    }
	//End drop  line_manager Data ===============
    
    function initialize_line_manager(qstr="", line_manager_callback_function_string="",req_url="")
    {
    
    ///alert(qstr);
      var line_manager_token_query =qstr;
      if(qstr=="")
      {
       var line_manager_token_query_param="";
       var line_manager_js_uptoken=mosy_get_param("line_manager_uptoken");
       //alert(line_manager_js_uptoken);
       if(line_manager_js_uptoken!==undefined)
       {
       
        line_manager_token_query_param = atob(line_manager_js_uptoken);
       }
        line_manager_token_query = " where primkey='"+(line_manager_token_query_param)+"'";
        
           if (document.getElementById("line_manager_uptoken") !==null) {
           	if(document.getElementById("line_manager_uptoken").value!="")
            {
            
            var line_manager_atob_tbl_key =atob(document.getElementById("line_manager_uptoken").value);
            
                   
            line_manager_token_query = " where primkey='"+(line_manager_atob_tbl_key)+"'";

            }
           }
      }
      
      var line_manager_push_ui_data_to =line_manager_callback_function_string;
      if(line_manager_callback_function_string=="")
      {
      line_manager_push_ui_data_to = "add_line_manager_ui_data";
      }
                
      console.log(line_manager_token_query+" -- "+line_manager_js_uptoken);

	  //alert(line_manager_push_ui_data_to);

     get_line_manager("*", line_manager_token_query, "primkey", "blackhole", line_manager_push_ui_data_to, "", "", req_url);
     
     ///get_line_manager(line_manager_colstr, line_manager_filter_col, line_manager_cols, line_manager_node_function_name, line_manager_callback_function_string, line_manager_ui_tag, line_manager_pagination, req_url="")
    }
    
    function add_line_manager_ui_data(line_manager_server_resp) 
    {
    
    ///alert(line_manager_server_resp);
    
    var json_decoded_str=JSON.parse(line_manager_server_resp)[0];
    
      var keys = Object.keys(json_decoded_str);

      for (var i = 0; i < keys.length; i++) {
          var val = json_decoded_str[keys[i]];
          ///console.log(" Key -- "+keys[i]+" val -- "+val);
          
          mosy_push_data("txt_"+keys[i], val);
          mosy_push_data("txt_"+keys[i]+"_disp", val);
          mosy_push_data("div_txt_"+keys[i], val);
          mosy_push_data("src_"+keys[i], val);
          mosy_push_data("href_"+keys[i], val);
          mosy_push_data("sel_"+keys[i], val);
          mosy_push_data_class("mosy_data_"+keys[i], val);
          
          // use val
      }
        
    }
    

    ///=============== load line_manager data on the fly ==============
    
	var gft_line_manager_str="(line_id LIKE '%{{qline_manager}}%' OR  line_name LIKE '%{{qline_manager}}%' OR  line_length LIKE '%{{qline_manager}}%' OR  remark LIKE '%{{qline_manager}}%')";
    
    function  gft_line_manager(qline_manager_str)
    {
        	var clean_line_manager_filter_str=gft_line_manager_str.replace(/{{qline_manager}}/g, magic_clean_str(qline_manager_str));
            
            return  clean_line_manager_filter_str;

    }
    
    function load_line_manager(line_manager_qstr, line_manager_where_str, line_manager_ret_cols, line_manager_user_function, line_manager_result_function, line_manager_data_tray, req_url="")
    {
    
    var fline_manager_result_function="push_result";
      
    if(line_manager_result_function!="")
    {
          var fline_manager_result_function=line_manager_result_function;

    }
    	var clean_line_manager_filter_str=gft_line_manager_str.replace(/{{qline_manager}}/g, magic_clean_str(line_manager_qstr));
        
        var fline_manager_where_str=" where "+clean_line_manager_filter_str;

    if(line_manager_where_str!="")
    {
          var fline_manager_where_str=" "+line_manager_where_str;

    }
       
      get_line_manager("*", fline_manager_where_str, line_manager_ret_cols, line_manager_user_function, fline_manager_result_function, line_manager_data_tray,"",req_url);
      ////get_line_manager(line_manager_colstr, line_manager_filter_col, line_manager_cols, line_manager_node_function_name, line_manager_callback_function_string, line_manager_ui_tag, line_manager_pagination, req_url="")
    }
    ///=============== load line_manager data on the fly ==============


 ///=quick load 
 
function qkload_line_manager(qstr, push_fun="", ui_card="", and_query="", additional_cols="", line_manager_pagination="",req_url="")
{

	var line_manager_list_nodes_str=line_manager_list_nodes;
  
   if(ui_card!="")
   {
      line_manager_list_nodes_str=ui_card;
   }
   
   var line_manager_qret_fun="push_grid_result:line_manager_tbl_list";
   
   if(push_fun!="")
   {
    line_manager_qret_fun=push_fun;
   }
   
   var combined_query ="";
   
   if(and_query!="")
   {
   combined_query=" and "+and_query;
   }
   
   var additional_cols_str=","+additional_cols;
   
   if(additional_cols=="")
   {
   	 additional_cols_str="";
   }
   
   get_line_manager("*", ajaxw+" ("+gft_line_manager(qstr)+") "+combined_query+"  order by primkey desc ", line_manager_list_cols+additional_cols_str, "",line_manager_qret_fun, "c=>"+line_manager_list_nodes_str, line_manager_pagination, req_url);
   ///get_line_manager(line_manager_colstr, line_manager_filter_col, line_manager_cols, line_manager_node_function_name, line_manager_callback_function_string, line_manager_ui_tag, line_manager_pagination, req_url="")               
}


////////////// arithmetic function 


//count 

function count_line_manager(where_str, push_to, callback_function_string="", num_form="yes", req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_num_data";

        }
      
      }
      
   get_line_manager("count(*) as tot_item_count", qwhere_str, "tot_item_count", "",""+callback_function_string_str+":"+push_to+"|tot_item_count", "","",req_url);
   ///get_line_manager(line_manager_colstr, line_manager_filter_col, line_manager_cols, line_manager_node_function_name, line_manager_callback_function_string, line_manager_ui_tag, line_manager_pagination, req_url="") 

}


//qddata
function qline_manager_ddata(where_str, disp_col , push_to, callback_function_string="",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_ddata";

      
      }
      
   get_line_manager("*", qwhere_str, disp_col, "", ""+callback_function_string_str+":"+push_to+"|"+disp_col+"", "","",req_url);
   ///get_line_manager(line_manager_colstr, line_manager_filter_col, line_manager_cols, line_manager_node_function_name, line_manager_callback_function_string, line_manager_ui_tag, line_manager_pagination, req_url="")    

}



//sum 

function sum_line_manager(sum_col, where_str, push_to, callback_function_string="", num_form="yes",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_ddata";

        }
      
      }
      
   get_line_manager("sum("+sum_col+") as tot_item_sum", qwhere_str, "tot_item_sum", "",""+callback_function_string_str+":"+push_to+"|tot_item_sum", "","",req_url);
   ///get_line_manager(line_manager_colstr, line_manager_filter_col, line_manager_cols, line_manager_node_function_name, line_manager_callback_function_string, line_manager_ui_tag, line_manager_pagination, req_url="")

}


///request handlers 

function line_manager_ins_(formid, required_inp=null, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "line_manager_insert_btn", callback_function_string_str, req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
}

function line_manager_updt_(formid, required_inp, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }

	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "line_manager_update_btn", callback_function_string_str,req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
      

}


function line_manager_rem_(req_token, callback_function_string="",req_url="")
{


	///alert(req_token+" --"+callback_function_string);

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get('conf_deleteline_manager&line_manager_uptoken='+magic_clean_str(req_token)+'', callback_function_string_str,req_url="");

}


function grid_line_manager_updt_(updt_key,colstr,newcolval, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get("_grid_updt_="+btoa('line_manager')+"&updt_key="+btoa(updt_key)+"&colstr="+btoa(colstr)+"&newcolval="+btoa(newcolval)+"&editor="+btoa('primkey')+"", callback_function_string_str,req_url="");

}
   

    //Start get  line_stations Data ===============
    
      function get_line_stations(line_stations_colstr, line_stations_filter_col, line_stations_cols, line_stations_node_function_name, line_stations_callback_function_string, line_stations_ui_tag, line_stations_pagination, req_url="")
      {
        mosyflex_sel("line_stations", line_stations_colstr, line_stations_filter_col , line_stations_cols, line_stations_node_function_name, line_stations_callback_function_string, line_stations_ui_tag, line_stations_pagination,req_url);
        
      }
    //End get  line_stations Data ===============

    //Start insert  line_stations Data ===============

	function add_line_stations(line_stations_cols, line_stations_vals, line_stations_callback_function_string)
    {
		
        mosyajax_create_data("line_stations", line_stations_cols, line_stations_vals, line_stations_callback_function_string);
     }
     
    //End insert  line_stations Data ===============

    
    //Start update  line_stations Data ===============

    function update_line_stations(line_stations_update_str, line_stations_where_str, line_stations_callback_function_string){
    
		mosyajax_update("line_stations", line_stations_update_str, line_stations_where_str, line_stations_callback_function_string)
    
    }
    //end  update  line_stations Data ===============

	//Start drop  line_stations Data ===============
    function line_stations_drop(line_stations_where_str, line_stations_callback_function_string)
    {
        mosyajax_drop("line_stations", line_stations_where_str, line_stations_callback_function_string)

    }
	//End drop  line_stations Data ===============
    
    function initialize_line_stations(qstr="", line_stations_callback_function_string="",req_url="")
    {
    
    ///alert(qstr);
      var line_stations_token_query =qstr;
      if(qstr=="")
      {
       var line_stations_token_query_param="";
       var line_stations_js_uptoken=mosy_get_param("line_stations_uptoken");
       //alert(line_stations_js_uptoken);
       if(line_stations_js_uptoken!==undefined)
       {
       
        line_stations_token_query_param = atob(line_stations_js_uptoken);
       }
        line_stations_token_query = " where primkey='"+(line_stations_token_query_param)+"'";
        
           if (document.getElementById("line_stations_uptoken") !==null) {
           	if(document.getElementById("line_stations_uptoken").value!="")
            {
            
            var line_stations_atob_tbl_key =atob(document.getElementById("line_stations_uptoken").value);
            
                   
            line_stations_token_query = " where primkey='"+(line_stations_atob_tbl_key)+"'";

            }
           }
      }
      
      var line_stations_push_ui_data_to =line_stations_callback_function_string;
      if(line_stations_callback_function_string=="")
      {
      line_stations_push_ui_data_to = "add_line_stations_ui_data";
      }
                
      console.log(line_stations_token_query+" -- "+line_stations_js_uptoken);

	  //alert(line_stations_push_ui_data_to);

     get_line_stations("*", line_stations_token_query, "primkey", "blackhole", line_stations_push_ui_data_to, "", "", req_url);
     
     ///get_line_stations(line_stations_colstr, line_stations_filter_col, line_stations_cols, line_stations_node_function_name, line_stations_callback_function_string, line_stations_ui_tag, line_stations_pagination, req_url="")
    }
    
    function add_line_stations_ui_data(line_stations_server_resp) 
    {
    
    ///alert(line_stations_server_resp);
    
    var json_decoded_str=JSON.parse(line_stations_server_resp)[0];
    
      var keys = Object.keys(json_decoded_str);

      for (var i = 0; i < keys.length; i++) {
          var val = json_decoded_str[keys[i]];
          ///console.log(" Key -- "+keys[i]+" val -- "+val);
          
          mosy_push_data("txt_"+keys[i], val);
          mosy_push_data("txt_"+keys[i]+"_disp", val);
          mosy_push_data("div_txt_"+keys[i], val);
          mosy_push_data("src_"+keys[i], val);
          mosy_push_data("href_"+keys[i], val);
          mosy_push_data("sel_"+keys[i], val);
          mosy_push_data_class("mosy_data_"+keys[i], val);
          
          // use val
      }
        
    }
    

    ///=============== load line_stations data on the fly ==============
    
	var gft_line_stations_str="(line_key LIKE '%{{qline_stations}}%' OR  line_id LIKE '%{{qline_stations}}%' OR  line_name LIKE '%{{qline_stations}}%' OR  line_length LIKE '%{{qline_stations}}%' OR  station_id LIKE '%{{qline_stations}}%' OR  station_name LIKE '%{{qline_stations}}%' OR  station_length LIKE '%{{qline_stations}}%' OR  remark LIKE '%{{qline_stations}}%' OR  station_number LIKE '%{{qline_stations}}%')";
    
    function  gft_line_stations(qline_stations_str)
    {
        	var clean_line_stations_filter_str=gft_line_stations_str.replace(/{{qline_stations}}/g, magic_clean_str(qline_stations_str));
            
            return  clean_line_stations_filter_str;

    }
    
    function load_line_stations(line_stations_qstr, line_stations_where_str, line_stations_ret_cols, line_stations_user_function, line_stations_result_function, line_stations_data_tray, req_url="")
    {
    
    var fline_stations_result_function="push_result";
      
    if(line_stations_result_function!="")
    {
          var fline_stations_result_function=line_stations_result_function;

    }
    	var clean_line_stations_filter_str=gft_line_stations_str.replace(/{{qline_stations}}/g, magic_clean_str(line_stations_qstr));
        
        var fline_stations_where_str=" where "+clean_line_stations_filter_str;

    if(line_stations_where_str!="")
    {
          var fline_stations_where_str=" "+line_stations_where_str;

    }
       
      get_line_stations("*", fline_stations_where_str, line_stations_ret_cols, line_stations_user_function, fline_stations_result_function, line_stations_data_tray,"",req_url);
      ////get_line_stations(line_stations_colstr, line_stations_filter_col, line_stations_cols, line_stations_node_function_name, line_stations_callback_function_string, line_stations_ui_tag, line_stations_pagination, req_url="")
    }
    ///=============== load line_stations data on the fly ==============


 ///=quick load 
 
function qkload_line_stations(qstr, push_fun="", ui_card="", and_query="", additional_cols="", line_stations_pagination="",req_url="")
{

	var line_stations_list_nodes_str=line_stations_list_nodes;
  
   if(ui_card!="")
   {
      line_stations_list_nodes_str=ui_card;
   }
   
   var line_stations_qret_fun="push_grid_result:line_stations_tbl_list";
   
   if(push_fun!="")
   {
    line_stations_qret_fun=push_fun;
   }
   
   var combined_query ="";
   
   if(and_query!="")
   {
   combined_query=" and "+and_query;
   }
   
   var additional_cols_str=","+additional_cols;
   
   if(additional_cols=="")
   {
   	 additional_cols_str="";
   }
   
   get_line_stations("*", ajaxw+" ("+gft_line_stations(qstr)+") "+combined_query+"  order by primkey desc ", line_stations_list_cols+additional_cols_str, "",line_stations_qret_fun, "c=>"+line_stations_list_nodes_str, line_stations_pagination, req_url);
   ///get_line_stations(line_stations_colstr, line_stations_filter_col, line_stations_cols, line_stations_node_function_name, line_stations_callback_function_string, line_stations_ui_tag, line_stations_pagination, req_url="")               
}


////////////// arithmetic function 


//count 

function count_line_stations(where_str, push_to, callback_function_string="", num_form="yes", req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_num_data";

        }
      
      }
      
   get_line_stations("count(*) as tot_item_count", qwhere_str, "tot_item_count", "",""+callback_function_string_str+":"+push_to+"|tot_item_count", "","",req_url);
   ///get_line_stations(line_stations_colstr, line_stations_filter_col, line_stations_cols, line_stations_node_function_name, line_stations_callback_function_string, line_stations_ui_tag, line_stations_pagination, req_url="") 

}


//qddata
function qline_stations_ddata(where_str, disp_col , push_to, callback_function_string="",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_ddata";

      
      }
      
   get_line_stations("*", qwhere_str, disp_col, "", ""+callback_function_string_str+":"+push_to+"|"+disp_col+"", "","",req_url);
   ///get_line_stations(line_stations_colstr, line_stations_filter_col, line_stations_cols, line_stations_node_function_name, line_stations_callback_function_string, line_stations_ui_tag, line_stations_pagination, req_url="")    

}



//sum 

function sum_line_stations(sum_col, where_str, push_to, callback_function_string="", num_form="yes",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_ddata";

        }
      
      }
      
   get_line_stations("sum("+sum_col+") as tot_item_sum", qwhere_str, "tot_item_sum", "",""+callback_function_string_str+":"+push_to+"|tot_item_sum", "","",req_url);
   ///get_line_stations(line_stations_colstr, line_stations_filter_col, line_stations_cols, line_stations_node_function_name, line_stations_callback_function_string, line_stations_ui_tag, line_stations_pagination, req_url="")

}


///request handlers 

function line_stations_ins_(formid, required_inp=null, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "line_stations_insert_btn", callback_function_string_str, req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
}

function line_stations_updt_(formid, required_inp, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }

	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "line_stations_update_btn", callback_function_string_str,req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
      

}


function line_stations_rem_(req_token, callback_function_string="",req_url="")
{


	///alert(req_token+" --"+callback_function_string);

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get('conf_deleteline_stations&line_stations_uptoken='+magic_clean_str(req_token)+'', callback_function_string_str,req_url="");

}


function grid_line_stations_updt_(updt_key,colstr,newcolval, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get("_grid_updt_="+btoa('line_stations')+"&updt_key="+btoa(updt_key)+"&colstr="+btoa(colstr)+"&newcolval="+btoa(newcolval)+"&editor="+btoa('primkey')+"", callback_function_string_str,req_url="");

}
   

    //Start get  maintainance_users Data ===============
    
      function get_maintainance_users(maintainance_users_colstr, maintainance_users_filter_col, maintainance_users_cols, maintainance_users_node_function_name, maintainance_users_callback_function_string, maintainance_users_ui_tag, maintainance_users_pagination, req_url="")
      {
        mosyflex_sel("maintainance_users", maintainance_users_colstr, maintainance_users_filter_col , maintainance_users_cols, maintainance_users_node_function_name, maintainance_users_callback_function_string, maintainance_users_ui_tag, maintainance_users_pagination,req_url);
        
      }
    //End get  maintainance_users Data ===============

    //Start insert  maintainance_users Data ===============

	function add_maintainance_users(maintainance_users_cols, maintainance_users_vals, maintainance_users_callback_function_string)
    {
		
        mosyajax_create_data("maintainance_users", maintainance_users_cols, maintainance_users_vals, maintainance_users_callback_function_string);
     }
     
    //End insert  maintainance_users Data ===============

    
    //Start update  maintainance_users Data ===============

    function update_maintainance_users(maintainance_users_update_str, maintainance_users_where_str, maintainance_users_callback_function_string){
    
		mosyajax_update("maintainance_users", maintainance_users_update_str, maintainance_users_where_str, maintainance_users_callback_function_string)
    
    }
    //end  update  maintainance_users Data ===============

	//Start drop  maintainance_users Data ===============
    function maintainance_users_drop(maintainance_users_where_str, maintainance_users_callback_function_string)
    {
        mosyajax_drop("maintainance_users", maintainance_users_where_str, maintainance_users_callback_function_string)

    }
	//End drop  maintainance_users Data ===============
    
    function initialize_maintainance_users(qstr="", maintainance_users_callback_function_string="",req_url="")
    {
    
    ///alert(qstr);
      var maintainance_users_token_query =qstr;
      if(qstr=="")
      {
       var maintainance_users_token_query_param="";
       var maintainance_users_js_uptoken=mosy_get_param("maintainance_users_uptoken");
       //alert(maintainance_users_js_uptoken);
       if(maintainance_users_js_uptoken!==undefined)
       {
       
        maintainance_users_token_query_param = atob(maintainance_users_js_uptoken);
       }
        maintainance_users_token_query = " where primkey='"+(maintainance_users_token_query_param)+"'";
        
           if (document.getElementById("maintainance_users_uptoken") !==null) {
           	if(document.getElementById("maintainance_users_uptoken").value!="")
            {
            
            var maintainance_users_atob_tbl_key =atob(document.getElementById("maintainance_users_uptoken").value);
            
                   
            maintainance_users_token_query = " where primkey='"+(maintainance_users_atob_tbl_key)+"'";

            }
           }
      }
      
      var maintainance_users_push_ui_data_to =maintainance_users_callback_function_string;
      if(maintainance_users_callback_function_string=="")
      {
      maintainance_users_push_ui_data_to = "add_maintainance_users_ui_data";
      }
                
      console.log(maintainance_users_token_query+" -- "+maintainance_users_js_uptoken);

	  //alert(maintainance_users_push_ui_data_to);

     get_maintainance_users("*", maintainance_users_token_query, "primkey", "blackhole", maintainance_users_push_ui_data_to, "", "", req_url);
     
     ///get_maintainance_users(maintainance_users_colstr, maintainance_users_filter_col, maintainance_users_cols, maintainance_users_node_function_name, maintainance_users_callback_function_string, maintainance_users_ui_tag, maintainance_users_pagination, req_url="")
    }
    
    function add_maintainance_users_ui_data(maintainance_users_server_resp) 
    {
    
    ///alert(maintainance_users_server_resp);
    
    var json_decoded_str=JSON.parse(maintainance_users_server_resp)[0];
    
      var keys = Object.keys(json_decoded_str);

      for (var i = 0; i < keys.length; i++) {
          var val = json_decoded_str[keys[i]];
          ///console.log(" Key -- "+keys[i]+" val -- "+val);
          
          mosy_push_data("txt_"+keys[i], val);
          mosy_push_data("txt_"+keys[i]+"_disp", val);
          mosy_push_data("div_txt_"+keys[i], val);
          mosy_push_data("src_"+keys[i], val);
          mosy_push_data("href_"+keys[i], val);
          mosy_push_data("sel_"+keys[i], val);
          mosy_push_data_class("mosy_data_"+keys[i], val);
          
          // use val
      }
        
    }
    

    ///=============== load maintainance_users data on the fly ==============
    
	var gft_maintainance_users_str="(user_id LIKE '%{{qmaintainance_users}}%' OR  name LIKE '%{{qmaintainance_users}}%' OR  email LIKE '%{{qmaintainance_users}}%' OR  tel LIKE '%{{qmaintainance_users}}%' OR  login_password LIKE '%{{qmaintainance_users}}%' OR  ref_id LIKE '%{{qmaintainance_users}}%' OR  regdate LIKE '%{{qmaintainance_users}}%' OR  user_no LIKE '%{{qmaintainance_users}}%' OR  user_pic LIKE '%{{qmaintainance_users}}%' OR  user_gender LIKE '%{{qmaintainance_users}}%' OR  last_seen LIKE '%{{qmaintainance_users}}%' OR  about LIKE '%{{qmaintainance_users}}%')";
    
    function  gft_maintainance_users(qmaintainance_users_str)
    {
        	var clean_maintainance_users_filter_str=gft_maintainance_users_str.replace(/{{qmaintainance_users}}/g, magic_clean_str(qmaintainance_users_str));
            
            return  clean_maintainance_users_filter_str;

    }
    
    function load_maintainance_users(maintainance_users_qstr, maintainance_users_where_str, maintainance_users_ret_cols, maintainance_users_user_function, maintainance_users_result_function, maintainance_users_data_tray, req_url="")
    {
    
    var fmaintainance_users_result_function="push_result";
      
    if(maintainance_users_result_function!="")
    {
          var fmaintainance_users_result_function=maintainance_users_result_function;

    }
    	var clean_maintainance_users_filter_str=gft_maintainance_users_str.replace(/{{qmaintainance_users}}/g, magic_clean_str(maintainance_users_qstr));
        
        var fmaintainance_users_where_str=" where "+clean_maintainance_users_filter_str;

    if(maintainance_users_where_str!="")
    {
          var fmaintainance_users_where_str=" "+maintainance_users_where_str;

    }
       
      get_maintainance_users("*", fmaintainance_users_where_str, maintainance_users_ret_cols, maintainance_users_user_function, fmaintainance_users_result_function, maintainance_users_data_tray,"",req_url);
      ////get_maintainance_users(maintainance_users_colstr, maintainance_users_filter_col, maintainance_users_cols, maintainance_users_node_function_name, maintainance_users_callback_function_string, maintainance_users_ui_tag, maintainance_users_pagination, req_url="")
    }
    ///=============== load maintainance_users data on the fly ==============


 ///=quick load 
 
function qkload_maintainance_users(qstr, push_fun="", ui_card="", and_query="", additional_cols="", maintainance_users_pagination="",req_url="")
{

	var maintainance_users_list_nodes_str=maintainance_users_list_nodes;
  
   if(ui_card!="")
   {
      maintainance_users_list_nodes_str=ui_card;
   }
   
   var maintainance_users_qret_fun="push_grid_result:maintainance_users_tbl_list";
   
   if(push_fun!="")
   {
    maintainance_users_qret_fun=push_fun;
   }
   
   var combined_query ="";
   
   if(and_query!="")
   {
   combined_query=" and "+and_query;
   }
   
   var additional_cols_str=","+additional_cols;
   
   if(additional_cols=="")
   {
   	 additional_cols_str="";
   }
   
   get_maintainance_users("*", ajaxw+" ("+gft_maintainance_users(qstr)+") "+combined_query+"  order by primkey desc ", maintainance_users_list_cols+additional_cols_str, "",maintainance_users_qret_fun, "c=>"+maintainance_users_list_nodes_str, maintainance_users_pagination, req_url);
   ///get_maintainance_users(maintainance_users_colstr, maintainance_users_filter_col, maintainance_users_cols, maintainance_users_node_function_name, maintainance_users_callback_function_string, maintainance_users_ui_tag, maintainance_users_pagination, req_url="")               
}


////////////// arithmetic function 


//count 

function count_maintainance_users(where_str, push_to, callback_function_string="", num_form="yes", req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_num_data";

        }
      
      }
      
   get_maintainance_users("count(*) as tot_item_count", qwhere_str, "tot_item_count", "",""+callback_function_string_str+":"+push_to+"|tot_item_count", "","",req_url);
   ///get_maintainance_users(maintainance_users_colstr, maintainance_users_filter_col, maintainance_users_cols, maintainance_users_node_function_name, maintainance_users_callback_function_string, maintainance_users_ui_tag, maintainance_users_pagination, req_url="") 

}


//qddata
function qmaintainance_users_ddata(where_str, disp_col , push_to, callback_function_string="",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_ddata";

      
      }
      
   get_maintainance_users("*", qwhere_str, disp_col, "", ""+callback_function_string_str+":"+push_to+"|"+disp_col+"", "","",req_url);
   ///get_maintainance_users(maintainance_users_colstr, maintainance_users_filter_col, maintainance_users_cols, maintainance_users_node_function_name, maintainance_users_callback_function_string, maintainance_users_ui_tag, maintainance_users_pagination, req_url="")    

}



//sum 

function sum_maintainance_users(sum_col, where_str, push_to, callback_function_string="", num_form="yes",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_ddata";

        }
      
      }
      
   get_maintainance_users("sum("+sum_col+") as tot_item_sum", qwhere_str, "tot_item_sum", "",""+callback_function_string_str+":"+push_to+"|tot_item_sum", "","",req_url);
   ///get_maintainance_users(maintainance_users_colstr, maintainance_users_filter_col, maintainance_users_cols, maintainance_users_node_function_name, maintainance_users_callback_function_string, maintainance_users_ui_tag, maintainance_users_pagination, req_url="")

}


///request handlers 

function maintainance_users_ins_(formid, required_inp=null, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "maintainance_users_insert_btn", callback_function_string_str, req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
}

function maintainance_users_updt_(formid, required_inp, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }

	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "maintainance_users_update_btn", callback_function_string_str,req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
      

}


function maintainance_users_rem_(req_token, callback_function_string="",req_url="")
{


	///alert(req_token+" --"+callback_function_string);

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get('conf_deletemaintainance_users&maintainance_users_uptoken='+magic_clean_str(req_token)+'', callback_function_string_str,req_url="");

}


function grid_maintainance_users_updt_(updt_key,colstr,newcolval, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get("_grid_updt_="+btoa('maintainance_users')+"&updt_key="+btoa(updt_key)+"&colstr="+btoa(colstr)+"&newcolval="+btoa(newcolval)+"&editor="+btoa('primkey')+"", callback_function_string_str,req_url="");

}
   

    //Start get  mosy_sql_roll_back Data ===============
    
      function get_mosy_sql_roll_back(mosy_sql_roll_back_colstr, mosy_sql_roll_back_filter_col, mosy_sql_roll_back_cols, mosy_sql_roll_back_node_function_name, mosy_sql_roll_back_callback_function_string, mosy_sql_roll_back_ui_tag, mosy_sql_roll_back_pagination, req_url="")
      {
        mosyflex_sel("mosy_sql_roll_back", mosy_sql_roll_back_colstr, mosy_sql_roll_back_filter_col , mosy_sql_roll_back_cols, mosy_sql_roll_back_node_function_name, mosy_sql_roll_back_callback_function_string, mosy_sql_roll_back_ui_tag, mosy_sql_roll_back_pagination,req_url);
        
      }
    //End get  mosy_sql_roll_back Data ===============

    //Start insert  mosy_sql_roll_back Data ===============

	function add_mosy_sql_roll_back(mosy_sql_roll_back_cols, mosy_sql_roll_back_vals, mosy_sql_roll_back_callback_function_string)
    {
		
        mosyajax_create_data("mosy_sql_roll_back", mosy_sql_roll_back_cols, mosy_sql_roll_back_vals, mosy_sql_roll_back_callback_function_string);
     }
     
    //End insert  mosy_sql_roll_back Data ===============

    
    //Start update  mosy_sql_roll_back Data ===============

    function update_mosy_sql_roll_back(mosy_sql_roll_back_update_str, mosy_sql_roll_back_where_str, mosy_sql_roll_back_callback_function_string){
    
		mosyajax_update("mosy_sql_roll_back", mosy_sql_roll_back_update_str, mosy_sql_roll_back_where_str, mosy_sql_roll_back_callback_function_string)
    
    }
    //end  update  mosy_sql_roll_back Data ===============

	//Start drop  mosy_sql_roll_back Data ===============
    function mosy_sql_roll_back_drop(mosy_sql_roll_back_where_str, mosy_sql_roll_back_callback_function_string)
    {
        mosyajax_drop("mosy_sql_roll_back", mosy_sql_roll_back_where_str, mosy_sql_roll_back_callback_function_string)

    }
	//End drop  mosy_sql_roll_back Data ===============
    
    function initialize_mosy_sql_roll_back(qstr="", mosy_sql_roll_back_callback_function_string="",req_url="")
    {
    
    ///alert(qstr);
      var mosy_sql_roll_back_token_query =qstr;
      if(qstr=="")
      {
       var mosy_sql_roll_back_token_query_param="";
       var mosy_sql_roll_back_js_uptoken=mosy_get_param("mosy_sql_roll_back_uptoken");
       //alert(mosy_sql_roll_back_js_uptoken);
       if(mosy_sql_roll_back_js_uptoken!==undefined)
       {
       
        mosy_sql_roll_back_token_query_param = atob(mosy_sql_roll_back_js_uptoken);
       }
        mosy_sql_roll_back_token_query = " where primkey='"+(mosy_sql_roll_back_token_query_param)+"'";
        
           if (document.getElementById("mosy_sql_roll_back_uptoken") !==null) {
           	if(document.getElementById("mosy_sql_roll_back_uptoken").value!="")
            {
            
            var mosy_sql_roll_back_atob_tbl_key =atob(document.getElementById("mosy_sql_roll_back_uptoken").value);
            
                   
            mosy_sql_roll_back_token_query = " where primkey='"+(mosy_sql_roll_back_atob_tbl_key)+"'";

            }
           }
      }
      
      var mosy_sql_roll_back_push_ui_data_to =mosy_sql_roll_back_callback_function_string;
      if(mosy_sql_roll_back_callback_function_string=="")
      {
      mosy_sql_roll_back_push_ui_data_to = "add_mosy_sql_roll_back_ui_data";
      }
                
      console.log(mosy_sql_roll_back_token_query+" -- "+mosy_sql_roll_back_js_uptoken);

	  //alert(mosy_sql_roll_back_push_ui_data_to);

     get_mosy_sql_roll_back("*", mosy_sql_roll_back_token_query, "primkey", "blackhole", mosy_sql_roll_back_push_ui_data_to, "", "", req_url);
     
     ///get_mosy_sql_roll_back(mosy_sql_roll_back_colstr, mosy_sql_roll_back_filter_col, mosy_sql_roll_back_cols, mosy_sql_roll_back_node_function_name, mosy_sql_roll_back_callback_function_string, mosy_sql_roll_back_ui_tag, mosy_sql_roll_back_pagination, req_url="")
    }
    
    function add_mosy_sql_roll_back_ui_data(mosy_sql_roll_back_server_resp) 
    {
    
    ///alert(mosy_sql_roll_back_server_resp);
    
    var json_decoded_str=JSON.parse(mosy_sql_roll_back_server_resp)[0];
    
      var keys = Object.keys(json_decoded_str);

      for (var i = 0; i < keys.length; i++) {
          var val = json_decoded_str[keys[i]];
          ///console.log(" Key -- "+keys[i]+" val -- "+val);
          
          mosy_push_data("txt_"+keys[i], val);
          mosy_push_data("txt_"+keys[i]+"_disp", val);
          mosy_push_data("div_txt_"+keys[i], val);
          mosy_push_data("src_"+keys[i], val);
          mosy_push_data("href_"+keys[i], val);
          mosy_push_data("sel_"+keys[i], val);
          mosy_push_data_class("mosy_data_"+keys[i], val);
          
          // use val
      }
        
    }
    

    ///=============== load mosy_sql_roll_back data on the fly ==============
    
	var gft_mosy_sql_roll_back_str="(roll_bk_key LIKE '%{{qmosy_sql_roll_back}}%' OR  table_name LIKE '%{{qmosy_sql_roll_back}}%' OR  roll_type LIKE '%{{qmosy_sql_roll_back}}%' OR  where_str LIKE '%{{qmosy_sql_roll_back}}%' OR  roll_timestamp LIKE '%{{qmosy_sql_roll_back}}%' OR  value_entries LIKE '%{{qmosy_sql_roll_back}}%')";
    
    function  gft_mosy_sql_roll_back(qmosy_sql_roll_back_str)
    {
        	var clean_mosy_sql_roll_back_filter_str=gft_mosy_sql_roll_back_str.replace(/{{qmosy_sql_roll_back}}/g, magic_clean_str(qmosy_sql_roll_back_str));
            
            return  clean_mosy_sql_roll_back_filter_str;

    }
    
    function load_mosy_sql_roll_back(mosy_sql_roll_back_qstr, mosy_sql_roll_back_where_str, mosy_sql_roll_back_ret_cols, mosy_sql_roll_back_user_function, mosy_sql_roll_back_result_function, mosy_sql_roll_back_data_tray, req_url="")
    {
    
    var fmosy_sql_roll_back_result_function="push_result";
      
    if(mosy_sql_roll_back_result_function!="")
    {
          var fmosy_sql_roll_back_result_function=mosy_sql_roll_back_result_function;

    }
    	var clean_mosy_sql_roll_back_filter_str=gft_mosy_sql_roll_back_str.replace(/{{qmosy_sql_roll_back}}/g, magic_clean_str(mosy_sql_roll_back_qstr));
        
        var fmosy_sql_roll_back_where_str=" where "+clean_mosy_sql_roll_back_filter_str;

    if(mosy_sql_roll_back_where_str!="")
    {
          var fmosy_sql_roll_back_where_str=" "+mosy_sql_roll_back_where_str;

    }
       
      get_mosy_sql_roll_back("*", fmosy_sql_roll_back_where_str, mosy_sql_roll_back_ret_cols, mosy_sql_roll_back_user_function, fmosy_sql_roll_back_result_function, mosy_sql_roll_back_data_tray,"",req_url);
      ////get_mosy_sql_roll_back(mosy_sql_roll_back_colstr, mosy_sql_roll_back_filter_col, mosy_sql_roll_back_cols, mosy_sql_roll_back_node_function_name, mosy_sql_roll_back_callback_function_string, mosy_sql_roll_back_ui_tag, mosy_sql_roll_back_pagination, req_url="")
    }
    ///=============== load mosy_sql_roll_back data on the fly ==============


 ///=quick load 
 
function qkload_mosy_sql_roll_back(qstr, push_fun="", ui_card="", and_query="", additional_cols="", mosy_sql_roll_back_pagination="",req_url="")
{

	var mosy_sql_roll_back_list_nodes_str=mosy_sql_roll_back_list_nodes;
  
   if(ui_card!="")
   {
      mosy_sql_roll_back_list_nodes_str=ui_card;
   }
   
   var mosy_sql_roll_back_qret_fun="push_grid_result:mosy_sql_roll_back_tbl_list";
   
   if(push_fun!="")
   {
    mosy_sql_roll_back_qret_fun=push_fun;
   }
   
   var combined_query ="";
   
   if(and_query!="")
   {
   combined_query=" and "+and_query;
   }
   
   var additional_cols_str=","+additional_cols;
   
   if(additional_cols=="")
   {
   	 additional_cols_str="";
   }
   
   get_mosy_sql_roll_back("*", ajaxw+" ("+gft_mosy_sql_roll_back(qstr)+") "+combined_query+"  order by primkey desc ", mosy_sql_roll_back_list_cols+additional_cols_str, "",mosy_sql_roll_back_qret_fun, "c=>"+mosy_sql_roll_back_list_nodes_str, mosy_sql_roll_back_pagination, req_url);
   ///get_mosy_sql_roll_back(mosy_sql_roll_back_colstr, mosy_sql_roll_back_filter_col, mosy_sql_roll_back_cols, mosy_sql_roll_back_node_function_name, mosy_sql_roll_back_callback_function_string, mosy_sql_roll_back_ui_tag, mosy_sql_roll_back_pagination, req_url="")               
}


////////////// arithmetic function 


//count 

function count_mosy_sql_roll_back(where_str, push_to, callback_function_string="", num_form="yes", req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_num_data";

        }
      
      }
      
   get_mosy_sql_roll_back("count(*) as tot_item_count", qwhere_str, "tot_item_count", "",""+callback_function_string_str+":"+push_to+"|tot_item_count", "","",req_url);
   ///get_mosy_sql_roll_back(mosy_sql_roll_back_colstr, mosy_sql_roll_back_filter_col, mosy_sql_roll_back_cols, mosy_sql_roll_back_node_function_name, mosy_sql_roll_back_callback_function_string, mosy_sql_roll_back_ui_tag, mosy_sql_roll_back_pagination, req_url="") 

}


//qddata
function qmosy_sql_roll_back_ddata(where_str, disp_col , push_to, callback_function_string="",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_ddata";

      
      }
      
   get_mosy_sql_roll_back("*", qwhere_str, disp_col, "", ""+callback_function_string_str+":"+push_to+"|"+disp_col+"", "","",req_url);
   ///get_mosy_sql_roll_back(mosy_sql_roll_back_colstr, mosy_sql_roll_back_filter_col, mosy_sql_roll_back_cols, mosy_sql_roll_back_node_function_name, mosy_sql_roll_back_callback_function_string, mosy_sql_roll_back_ui_tag, mosy_sql_roll_back_pagination, req_url="")    

}



//sum 

function sum_mosy_sql_roll_back(sum_col, where_str, push_to, callback_function_string="", num_form="yes",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_ddata";

        }
      
      }
      
   get_mosy_sql_roll_back("sum("+sum_col+") as tot_item_sum", qwhere_str, "tot_item_sum", "",""+callback_function_string_str+":"+push_to+"|tot_item_sum", "","",req_url);
   ///get_mosy_sql_roll_back(mosy_sql_roll_back_colstr, mosy_sql_roll_back_filter_col, mosy_sql_roll_back_cols, mosy_sql_roll_back_node_function_name, mosy_sql_roll_back_callback_function_string, mosy_sql_roll_back_ui_tag, mosy_sql_roll_back_pagination, req_url="")

}


///request handlers 

function mosy_sql_roll_back_ins_(formid, required_inp=null, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "mosy_sql_roll_back_insert_btn", callback_function_string_str, req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
}

function mosy_sql_roll_back_updt_(formid, required_inp, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }

	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "mosy_sql_roll_back_update_btn", callback_function_string_str,req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
      

}


function mosy_sql_roll_back_rem_(req_token, callback_function_string="",req_url="")
{


	///alert(req_token+" --"+callback_function_string);

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get('conf_deletemosy_sql_roll_back&mosy_sql_roll_back_uptoken='+magic_clean_str(req_token)+'', callback_function_string_str,req_url="");

}


function grid_mosy_sql_roll_back_updt_(updt_key,colstr,newcolval, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get("_grid_updt_="+btoa('mosy_sql_roll_back')+"&updt_key="+btoa(updt_key)+"&colstr="+btoa(colstr)+"&newcolval="+btoa(newcolval)+"&editor="+btoa('primkey')+"", callback_function_string_str,req_url="");

}
   

    //Start get  notification_manifest_ Data ===============
    
      function get_notification_manifest_(notification_manifest__colstr, notification_manifest__filter_col, notification_manifest__cols, notification_manifest__node_function_name, notification_manifest__callback_function_string, notification_manifest__ui_tag, notification_manifest__pagination, req_url="")
      {
        mosyflex_sel("notification_manifest_", notification_manifest__colstr, notification_manifest__filter_col , notification_manifest__cols, notification_manifest__node_function_name, notification_manifest__callback_function_string, notification_manifest__ui_tag, notification_manifest__pagination,req_url);
        
      }
    //End get  notification_manifest_ Data ===============

    //Start insert  notification_manifest_ Data ===============

	function add_notification_manifest_(notification_manifest__cols, notification_manifest__vals, notification_manifest__callback_function_string)
    {
		
        mosyajax_create_data("notification_manifest_", notification_manifest__cols, notification_manifest__vals, notification_manifest__callback_function_string);
     }
     
    //End insert  notification_manifest_ Data ===============

    
    //Start update  notification_manifest_ Data ===============

    function update_notification_manifest_(notification_manifest__update_str, notification_manifest__where_str, notification_manifest__callback_function_string){
    
		mosyajax_update("notification_manifest_", notification_manifest__update_str, notification_manifest__where_str, notification_manifest__callback_function_string)
    
    }
    //end  update  notification_manifest_ Data ===============

	//Start drop  notification_manifest_ Data ===============
    function notification_manifest__drop(notification_manifest__where_str, notification_manifest__callback_function_string)
    {
        mosyajax_drop("notification_manifest_", notification_manifest__where_str, notification_manifest__callback_function_string)

    }
	//End drop  notification_manifest_ Data ===============
    
    function initialize_notification_manifest_(qstr="", notification_manifest__callback_function_string="",req_url="")
    {
    
    ///alert(qstr);
      var notification_manifest__token_query =qstr;
      if(qstr=="")
      {
       var notification_manifest__token_query_param="";
       var notification_manifest__js_uptoken=mosy_get_param("notification_manifest__uptoken");
       //alert(notification_manifest__js_uptoken);
       if(notification_manifest__js_uptoken!==undefined)
       {
       
        notification_manifest__token_query_param = atob(notification_manifest__js_uptoken);
       }
        notification_manifest__token_query = " where primkey='"+(notification_manifest__token_query_param)+"'";
        
           if (document.getElementById("notification_manifest__uptoken") !==null) {
           	if(document.getElementById("notification_manifest__uptoken").value!="")
            {
            
            var notification_manifest__atob_tbl_key =atob(document.getElementById("notification_manifest__uptoken").value);
            
                   
            notification_manifest__token_query = " where primkey='"+(notification_manifest__atob_tbl_key)+"'";

            }
           }
      }
      
      var notification_manifest__push_ui_data_to =notification_manifest__callback_function_string;
      if(notification_manifest__callback_function_string=="")
      {
      notification_manifest__push_ui_data_to = "add_notification_manifest__ui_data";
      }
                
      console.log(notification_manifest__token_query+" -- "+notification_manifest__js_uptoken);

	  //alert(notification_manifest__push_ui_data_to);

     get_notification_manifest_("*", notification_manifest__token_query, "primkey", "blackhole", notification_manifest__push_ui_data_to, "", "", req_url);
     
     ///get_notification_manifest_(notification_manifest__colstr, notification_manifest__filter_col, notification_manifest__cols, notification_manifest__node_function_name, notification_manifest__callback_function_string, notification_manifest__ui_tag, notification_manifest__pagination, req_url="")
    }
    
    function add_notification_manifest__ui_data(notification_manifest__server_resp) 
    {
    
    ///alert(notification_manifest__server_resp);
    
    var json_decoded_str=JSON.parse(notification_manifest__server_resp)[0];
    
      var keys = Object.keys(json_decoded_str);

      for (var i = 0; i < keys.length; i++) {
          var val = json_decoded_str[keys[i]];
          ///console.log(" Key -- "+keys[i]+" val -- "+val);
          
          mosy_push_data("txt_"+keys[i], val);
          mosy_push_data("txt_"+keys[i]+"_disp", val);
          mosy_push_data("div_txt_"+keys[i], val);
          mosy_push_data("src_"+keys[i], val);
          mosy_push_data("href_"+keys[i], val);
          mosy_push_data("sel_"+keys[i], val);
          mosy_push_data_class("mosy_data_"+keys[i], val);
          
          // use val
      }
        
    }
    

    ///=============== load notification_manifest_ data on the fly ==============
    
	var gft_notification_manifest__str="(notific_key LIKE '%{{qnotification_manifest_}}%' OR  notification_type LIKE '%{{qnotification_manifest_}}%' OR  notification_state LIKE '%{{qnotification_manifest_}}%' OR  notification_icon LIKE '%{{qnotification_manifest_}}%' OR  notification_title LIKE '%{{qnotification_manifest_}}%' OR  notification_link LIKE '%{{qnotification_manifest_}}%' OR  notification_read_state LIKE '%{{qnotification_manifest_}}%' OR  site_id LIKE '%{{qnotification_manifest_}}%' OR  notification_time_stamp LIKE '%{{qnotification_manifest_}}%' OR  notif_remark LIKE '%{{qnotification_manifest_}}%')";
    
    function  gft_notification_manifest_(qnotification_manifest__str)
    {
        	var clean_notification_manifest__filter_str=gft_notification_manifest__str.replace(/{{qnotification_manifest_}}/g, magic_clean_str(qnotification_manifest__str));
            
            return  clean_notification_manifest__filter_str;

    }
    
    function load_notification_manifest_(notification_manifest__qstr, notification_manifest__where_str, notification_manifest__ret_cols, notification_manifest__user_function, notification_manifest__result_function, notification_manifest__data_tray, req_url="")
    {
    
    var fnotification_manifest__result_function="push_result";
      
    if(notification_manifest__result_function!="")
    {
          var fnotification_manifest__result_function=notification_manifest__result_function;

    }
    	var clean_notification_manifest__filter_str=gft_notification_manifest__str.replace(/{{qnotification_manifest_}}/g, magic_clean_str(notification_manifest__qstr));
        
        var fnotification_manifest__where_str=" where "+clean_notification_manifest__filter_str;

    if(notification_manifest__where_str!="")
    {
          var fnotification_manifest__where_str=" "+notification_manifest__where_str;

    }
       
      get_notification_manifest_("*", fnotification_manifest__where_str, notification_manifest__ret_cols, notification_manifest__user_function, fnotification_manifest__result_function, notification_manifest__data_tray,"",req_url);
      ////get_notification_manifest_(notification_manifest__colstr, notification_manifest__filter_col, notification_manifest__cols, notification_manifest__node_function_name, notification_manifest__callback_function_string, notification_manifest__ui_tag, notification_manifest__pagination, req_url="")
    }
    ///=============== load notification_manifest_ data on the fly ==============


 ///=quick load 
 
function qkload_notification_manifest_(qstr, push_fun="", ui_card="", and_query="", additional_cols="", notification_manifest__pagination="",req_url="")
{

	var notification_manifest__list_nodes_str=notification_manifest__list_nodes;
  
   if(ui_card!="")
   {
      notification_manifest__list_nodes_str=ui_card;
   }
   
   var notification_manifest__qret_fun="push_grid_result:notification_manifest__tbl_list";
   
   if(push_fun!="")
   {
    notification_manifest__qret_fun=push_fun;
   }
   
   var combined_query ="";
   
   if(and_query!="")
   {
   combined_query=" and "+and_query;
   }
   
   var additional_cols_str=","+additional_cols;
   
   if(additional_cols=="")
   {
   	 additional_cols_str="";
   }
   
   get_notification_manifest_("*", ajaxw+" ("+gft_notification_manifest_(qstr)+") "+combined_query+"  order by primkey desc ", notification_manifest__list_cols+additional_cols_str, "",notification_manifest__qret_fun, "c=>"+notification_manifest__list_nodes_str, notification_manifest__pagination, req_url);
   ///get_notification_manifest_(notification_manifest__colstr, notification_manifest__filter_col, notification_manifest__cols, notification_manifest__node_function_name, notification_manifest__callback_function_string, notification_manifest__ui_tag, notification_manifest__pagination, req_url="")               
}


////////////// arithmetic function 


//count 

function count_notification_manifest_(where_str, push_to, callback_function_string="", num_form="yes", req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_num_data";

        }
      
      }
      
   get_notification_manifest_("count(*) as tot_item_count", qwhere_str, "tot_item_count", "",""+callback_function_string_str+":"+push_to+"|tot_item_count", "","",req_url);
   ///get_notification_manifest_(notification_manifest__colstr, notification_manifest__filter_col, notification_manifest__cols, notification_manifest__node_function_name, notification_manifest__callback_function_string, notification_manifest__ui_tag, notification_manifest__pagination, req_url="") 

}


//qddata
function qnotification_manifest__ddata(where_str, disp_col , push_to, callback_function_string="",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_ddata";

      
      }
      
   get_notification_manifest_("*", qwhere_str, disp_col, "", ""+callback_function_string_str+":"+push_to+"|"+disp_col+"", "","",req_url);
   ///get_notification_manifest_(notification_manifest__colstr, notification_manifest__filter_col, notification_manifest__cols, notification_manifest__node_function_name, notification_manifest__callback_function_string, notification_manifest__ui_tag, notification_manifest__pagination, req_url="")    

}



//sum 

function sum_notification_manifest_(sum_col, where_str, push_to, callback_function_string="", num_form="yes",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_ddata";

        }
      
      }
      
   get_notification_manifest_("sum("+sum_col+") as tot_item_sum", qwhere_str, "tot_item_sum", "",""+callback_function_string_str+":"+push_to+"|tot_item_sum", "","",req_url);
   ///get_notification_manifest_(notification_manifest__colstr, notification_manifest__filter_col, notification_manifest__cols, notification_manifest__node_function_name, notification_manifest__callback_function_string, notification_manifest__ui_tag, notification_manifest__pagination, req_url="")

}


///request handlers 

function notification_manifest__ins_(formid, required_inp=null, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "notification_manifest__insert_btn", callback_function_string_str, req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
}

function notification_manifest__updt_(formid, required_inp, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }

	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "notification_manifest__update_btn", callback_function_string_str,req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
      

}


function notification_manifest__rem_(req_token, callback_function_string="",req_url="")
{


	///alert(req_token+" --"+callback_function_string);

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get('conf_deletenotification_manifest_&notification_manifest__uptoken='+magic_clean_str(req_token)+'', callback_function_string_str,req_url="");

}


function grid_notification_manifest__updt_(updt_key,colstr,newcolval, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get("_grid_updt_="+btoa('notification_manifest_')+"&updt_key="+btoa(updt_key)+"&colstr="+btoa(colstr)+"&newcolval="+btoa(newcolval)+"&editor="+btoa('primkey')+"", callback_function_string_str,req_url="");

}
   

    //Start get  occ_auth Data ===============
    
      function get_occ_auth(occ_auth_colstr, occ_auth_filter_col, occ_auth_cols, occ_auth_node_function_name, occ_auth_callback_function_string, occ_auth_ui_tag, occ_auth_pagination, req_url="")
      {
        mosyflex_sel("occ_auth", occ_auth_colstr, occ_auth_filter_col , occ_auth_cols, occ_auth_node_function_name, occ_auth_callback_function_string, occ_auth_ui_tag, occ_auth_pagination,req_url);
        
      }
    //End get  occ_auth Data ===============

    //Start insert  occ_auth Data ===============

	function add_occ_auth(occ_auth_cols, occ_auth_vals, occ_auth_callback_function_string)
    {
		
        mosyajax_create_data("occ_auth", occ_auth_cols, occ_auth_vals, occ_auth_callback_function_string);
     }
     
    //End insert  occ_auth Data ===============

    
    //Start update  occ_auth Data ===============

    function update_occ_auth(occ_auth_update_str, occ_auth_where_str, occ_auth_callback_function_string){
    
		mosyajax_update("occ_auth", occ_auth_update_str, occ_auth_where_str, occ_auth_callback_function_string)
    
    }
    //end  update  occ_auth Data ===============

	//Start drop  occ_auth Data ===============
    function occ_auth_drop(occ_auth_where_str, occ_auth_callback_function_string)
    {
        mosyajax_drop("occ_auth", occ_auth_where_str, occ_auth_callback_function_string)

    }
	//End drop  occ_auth Data ===============
    
    function initialize_occ_auth(qstr="", occ_auth_callback_function_string="",req_url="")
    {
    
    ///alert(qstr);
      var occ_auth_token_query =qstr;
      if(qstr=="")
      {
       var occ_auth_token_query_param="";
       var occ_auth_js_uptoken=mosy_get_param("occ_auth_uptoken");
       //alert(occ_auth_js_uptoken);
       if(occ_auth_js_uptoken!==undefined)
       {
       
        occ_auth_token_query_param = atob(occ_auth_js_uptoken);
       }
        occ_auth_token_query = " where primkey='"+(occ_auth_token_query_param)+"'";
        
           if (document.getElementById("occ_auth_uptoken") !==null) {
           	if(document.getElementById("occ_auth_uptoken").value!="")
            {
            
            var occ_auth_atob_tbl_key =atob(document.getElementById("occ_auth_uptoken").value);
            
                   
            occ_auth_token_query = " where primkey='"+(occ_auth_atob_tbl_key)+"'";

            }
           }
      }
      
      var occ_auth_push_ui_data_to =occ_auth_callback_function_string;
      if(occ_auth_callback_function_string=="")
      {
      occ_auth_push_ui_data_to = "add_occ_auth_ui_data";
      }
                
      console.log(occ_auth_token_query+" -- "+occ_auth_js_uptoken);

	  //alert(occ_auth_push_ui_data_to);

     get_occ_auth("*", occ_auth_token_query, "primkey", "blackhole", occ_auth_push_ui_data_to, "", "", req_url);
     
     ///get_occ_auth(occ_auth_colstr, occ_auth_filter_col, occ_auth_cols, occ_auth_node_function_name, occ_auth_callback_function_string, occ_auth_ui_tag, occ_auth_pagination, req_url="")
    }
    
    function add_occ_auth_ui_data(occ_auth_server_resp) 
    {
    
    ///alert(occ_auth_server_resp);
    
    var json_decoded_str=JSON.parse(occ_auth_server_resp)[0];
    
      var keys = Object.keys(json_decoded_str);

      for (var i = 0; i < keys.length; i++) {
          var val = json_decoded_str[keys[i]];
          ///console.log(" Key -- "+keys[i]+" val -- "+val);
          
          mosy_push_data("txt_"+keys[i], val);
          mosy_push_data("txt_"+keys[i]+"_disp", val);
          mosy_push_data("div_txt_"+keys[i], val);
          mosy_push_data("src_"+keys[i], val);
          mosy_push_data("href_"+keys[i], val);
          mosy_push_data("sel_"+keys[i], val);
          mosy_push_data_class("mosy_data_"+keys[i], val);
          
          // use val
      }
        
    }
    

    ///=============== load occ_auth data on the fly ==============
    
	var gft_occ_auth_str="(user_id LIKE '%{{qocc_auth}}%' OR  name LIKE '%{{qocc_auth}}%' OR  email LIKE '%{{qocc_auth}}%' OR  tel LIKE '%{{qocc_auth}}%' OR  login_password LIKE '%{{qocc_auth}}%' OR  ref_id LIKE '%{{qocc_auth}}%' OR  regdate LIKE '%{{qocc_auth}}%' OR  user_no LIKE '%{{qocc_auth}}%' OR  user_pic LIKE '%{{qocc_auth}}%' OR  user_gender LIKE '%{{qocc_auth}}%' OR  last_seen LIKE '%{{qocc_auth}}%' OR  about LIKE '%{{qocc_auth}}%')";
    
    function  gft_occ_auth(qocc_auth_str)
    {
        	var clean_occ_auth_filter_str=gft_occ_auth_str.replace(/{{qocc_auth}}/g, magic_clean_str(qocc_auth_str));
            
            return  clean_occ_auth_filter_str;

    }
    
    function load_occ_auth(occ_auth_qstr, occ_auth_where_str, occ_auth_ret_cols, occ_auth_user_function, occ_auth_result_function, occ_auth_data_tray, req_url="")
    {
    
    var focc_auth_result_function="push_result";
      
    if(occ_auth_result_function!="")
    {
          var focc_auth_result_function=occ_auth_result_function;

    }
    	var clean_occ_auth_filter_str=gft_occ_auth_str.replace(/{{qocc_auth}}/g, magic_clean_str(occ_auth_qstr));
        
        var focc_auth_where_str=" where "+clean_occ_auth_filter_str;

    if(occ_auth_where_str!="")
    {
          var focc_auth_where_str=" "+occ_auth_where_str;

    }
       
      get_occ_auth("*", focc_auth_where_str, occ_auth_ret_cols, occ_auth_user_function, focc_auth_result_function, occ_auth_data_tray,"",req_url);
      ////get_occ_auth(occ_auth_colstr, occ_auth_filter_col, occ_auth_cols, occ_auth_node_function_name, occ_auth_callback_function_string, occ_auth_ui_tag, occ_auth_pagination, req_url="")
    }
    ///=============== load occ_auth data on the fly ==============


 ///=quick load 
 
function qkload_occ_auth(qstr, push_fun="", ui_card="", and_query="", additional_cols="", occ_auth_pagination="",req_url="")
{

	var occ_auth_list_nodes_str=occ_auth_list_nodes;
  
   if(ui_card!="")
   {
      occ_auth_list_nodes_str=ui_card;
   }
   
   var occ_auth_qret_fun="push_grid_result:occ_auth_tbl_list";
   
   if(push_fun!="")
   {
    occ_auth_qret_fun=push_fun;
   }
   
   var combined_query ="";
   
   if(and_query!="")
   {
   combined_query=" and "+and_query;
   }
   
   var additional_cols_str=","+additional_cols;
   
   if(additional_cols=="")
   {
   	 additional_cols_str="";
   }
   
   get_occ_auth("*", ajaxw+" ("+gft_occ_auth(qstr)+") "+combined_query+"  order by primkey desc ", occ_auth_list_cols+additional_cols_str, "",occ_auth_qret_fun, "c=>"+occ_auth_list_nodes_str, occ_auth_pagination, req_url);
   ///get_occ_auth(occ_auth_colstr, occ_auth_filter_col, occ_auth_cols, occ_auth_node_function_name, occ_auth_callback_function_string, occ_auth_ui_tag, occ_auth_pagination, req_url="")               
}


////////////// arithmetic function 


//count 

function count_occ_auth(where_str, push_to, callback_function_string="", num_form="yes", req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_num_data";

        }
      
      }
      
   get_occ_auth("count(*) as tot_item_count", qwhere_str, "tot_item_count", "",""+callback_function_string_str+":"+push_to+"|tot_item_count", "","",req_url);
   ///get_occ_auth(occ_auth_colstr, occ_auth_filter_col, occ_auth_cols, occ_auth_node_function_name, occ_auth_callback_function_string, occ_auth_ui_tag, occ_auth_pagination, req_url="") 

}


//qddata
function qocc_auth_ddata(where_str, disp_col , push_to, callback_function_string="",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_ddata";

      
      }
      
   get_occ_auth("*", qwhere_str, disp_col, "", ""+callback_function_string_str+":"+push_to+"|"+disp_col+"", "","",req_url);
   ///get_occ_auth(occ_auth_colstr, occ_auth_filter_col, occ_auth_cols, occ_auth_node_function_name, occ_auth_callback_function_string, occ_auth_ui_tag, occ_auth_pagination, req_url="")    

}



//sum 

function sum_occ_auth(sum_col, where_str, push_to, callback_function_string="", num_form="yes",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_ddata";

        }
      
      }
      
   get_occ_auth("sum("+sum_col+") as tot_item_sum", qwhere_str, "tot_item_sum", "",""+callback_function_string_str+":"+push_to+"|tot_item_sum", "","",req_url);
   ///get_occ_auth(occ_auth_colstr, occ_auth_filter_col, occ_auth_cols, occ_auth_node_function_name, occ_auth_callback_function_string, occ_auth_ui_tag, occ_auth_pagination, req_url="")

}


///request handlers 

function occ_auth_ins_(formid, required_inp=null, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "occ_auth_insert_btn", callback_function_string_str, req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
}

function occ_auth_updt_(formid, required_inp, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }

	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "occ_auth_update_btn", callback_function_string_str,req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
      

}


function occ_auth_rem_(req_token, callback_function_string="",req_url="")
{


	///alert(req_token+" --"+callback_function_string);

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get('conf_deleteocc_auth&occ_auth_uptoken='+magic_clean_str(req_token)+'', callback_function_string_str,req_url="");

}


function grid_occ_auth_updt_(updt_key,colstr,newcolval, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get("_grid_updt_="+btoa('occ_auth')+"&updt_key="+btoa(updt_key)+"&colstr="+btoa(colstr)+"&newcolval="+btoa(newcolval)+"&editor="+btoa('primkey')+"", callback_function_string_str,req_url="");

}
   

    //Start get  requests Data ===============
    
      function get_requests(requests_colstr, requests_filter_col, requests_cols, requests_node_function_name, requests_callback_function_string, requests_ui_tag, requests_pagination, req_url="")
      {
        mosyflex_sel("requests", requests_colstr, requests_filter_col , requests_cols, requests_node_function_name, requests_callback_function_string, requests_ui_tag, requests_pagination,req_url);
        
      }
    //End get  requests Data ===============

    //Start insert  requests Data ===============

	function add_requests(requests_cols, requests_vals, requests_callback_function_string)
    {
		
        mosyajax_create_data("requests", requests_cols, requests_vals, requests_callback_function_string);
     }
     
    //End insert  requests Data ===============

    
    //Start update  requests Data ===============

    function update_requests(requests_update_str, requests_where_str, requests_callback_function_string){
    
		mosyajax_update("requests", requests_update_str, requests_where_str, requests_callback_function_string)
    
    }
    //end  update  requests Data ===============

	//Start drop  requests Data ===============
    function requests_drop(requests_where_str, requests_callback_function_string)
    {
        mosyajax_drop("requests", requests_where_str, requests_callback_function_string)

    }
	//End drop  requests Data ===============
    
    function initialize_requests(qstr="", requests_callback_function_string="",req_url="")
    {
    
    ///alert(qstr);
      var requests_token_query =qstr;
      if(qstr=="")
      {
       var requests_token_query_param="";
       var requests_js_uptoken=mosy_get_param("requests_uptoken");
       //alert(requests_js_uptoken);
       if(requests_js_uptoken!==undefined)
       {
       
        requests_token_query_param = atob(requests_js_uptoken);
       }
        requests_token_query = " where primkey='"+(requests_token_query_param)+"'";
        
           if (document.getElementById("requests_uptoken") !==null) {
           	if(document.getElementById("requests_uptoken").value!="")
            {
            
            var requests_atob_tbl_key =atob(document.getElementById("requests_uptoken").value);
            
                   
            requests_token_query = " where primkey='"+(requests_atob_tbl_key)+"'";

            }
           }
      }
      
      var requests_push_ui_data_to =requests_callback_function_string;
      if(requests_callback_function_string=="")
      {
      requests_push_ui_data_to = "add_requests_ui_data";
      }
                
      console.log(requests_token_query+" -- "+requests_js_uptoken);

	  //alert(requests_push_ui_data_to);

     get_requests("*", requests_token_query, "primkey", "blackhole", requests_push_ui_data_to, "", "", req_url);
     
     ///get_requests(requests_colstr, requests_filter_col, requests_cols, requests_node_function_name, requests_callback_function_string, requests_ui_tag, requests_pagination, req_url="")
    }
    
    function add_requests_ui_data(requests_server_resp) 
    {
    
    ///alert(requests_server_resp);
    
    var json_decoded_str=JSON.parse(requests_server_resp)[0];
    
      var keys = Object.keys(json_decoded_str);

      for (var i = 0; i < keys.length; i++) {
          var val = json_decoded_str[keys[i]];
          ///console.log(" Key -- "+keys[i]+" val -- "+val);
          
          mosy_push_data("txt_"+keys[i], val);
          mosy_push_data("txt_"+keys[i]+"_disp", val);
          mosy_push_data("div_txt_"+keys[i], val);
          mosy_push_data("src_"+keys[i], val);
          mosy_push_data("href_"+keys[i], val);
          mosy_push_data("sel_"+keys[i], val);
          mosy_push_data_class("mosy_data_"+keys[i], val);
          
          // use val
      }
        
    }
    

    ///=============== load requests data on the fly ==============
    
	var gft_requests_str="(request_id LIKE '%{{qrequests}}%' OR  locomotive LIKE '%{{qrequests}}%' OR  tail LIKE '%{{qrequests}}%' OR  train LIKE '%{{qrequests}}%' OR  status LIKE '%{{qrequests}}%' OR  tryin_hour LIKE '%{{qrequests}}%' OR  tryin_min LIKE '%{{qrequests}}%' OR  denial_reason LIKE '%{{qrequests}}%' OR  direction LIKE '%{{qrequests}}%' OR  destination_station_id LIKE '%{{qrequests}}%' OR  origin_station_id LIKE '%{{qrequests}}%' OR  added_by LIKE '%{{qrequests}}%' OR  date_added LIKE '%{{qrequests}}%' OR  deleted LIKE '%{{qrequests}}%' OR  modified_by LIKE '%{{qrequests}}%' OR  exit_status LIKE '%{{qrequests}}%' OR  current_station LIKE '%{{qrequests}}%' OR  line_id LIKE '%{{qrequests}}%' OR  destination_number LIKE '%{{qrequests}}%' OR  origin_number LIKE '%{{qrequests}}%' OR  current_number LIKE '%{{qrequests}}%' OR  train_speed LIKE '%{{qrequests}}%' OR  moved_dist LIKE '%{{qrequests}}%' OR  current_stn_length LIKE '%{{qrequests}}%')";
    
    function  gft_requests(qrequests_str)
    {
        	var clean_requests_filter_str=gft_requests_str.replace(/{{qrequests}}/g, magic_clean_str(qrequests_str));
            
            return  clean_requests_filter_str;

    }
    
    function load_requests(requests_qstr, requests_where_str, requests_ret_cols, requests_user_function, requests_result_function, requests_data_tray, req_url="")
    {
    
    var frequests_result_function="push_result";
      
    if(requests_result_function!="")
    {
          var frequests_result_function=requests_result_function;

    }
    	var clean_requests_filter_str=gft_requests_str.replace(/{{qrequests}}/g, magic_clean_str(requests_qstr));
        
        var frequests_where_str=" where "+clean_requests_filter_str;

    if(requests_where_str!="")
    {
          var frequests_where_str=" "+requests_where_str;

    }
       
      get_requests("*", frequests_where_str, requests_ret_cols, requests_user_function, frequests_result_function, requests_data_tray,"",req_url);
      ////get_requests(requests_colstr, requests_filter_col, requests_cols, requests_node_function_name, requests_callback_function_string, requests_ui_tag, requests_pagination, req_url="")
    }
    ///=============== load requests data on the fly ==============


 ///=quick load 
 
function qkload_requests(qstr, push_fun="", ui_card="", and_query="", additional_cols="", requests_pagination="",req_url="")
{

	var requests_list_nodes_str=requests_list_nodes;
  
   if(ui_card!="")
   {
      requests_list_nodes_str=ui_card;
   }
   
   var requests_qret_fun="push_grid_result:requests_tbl_list";
   
   if(push_fun!="")
   {
    requests_qret_fun=push_fun;
   }
   
   var combined_query ="";
   
   if(and_query!="")
   {
   combined_query=" and "+and_query;
   }
   
   var additional_cols_str=","+additional_cols;
   
   if(additional_cols=="")
   {
   	 additional_cols_str="";
   }
   
   get_requests("*", ajaxw+" ("+gft_requests(qstr)+") "+combined_query+"  order by primkey desc ", requests_list_cols+additional_cols_str, "",requests_qret_fun, "c=>"+requests_list_nodes_str, requests_pagination, req_url);
   ///get_requests(requests_colstr, requests_filter_col, requests_cols, requests_node_function_name, requests_callback_function_string, requests_ui_tag, requests_pagination, req_url="")               
}


////////////// arithmetic function 


//count 

function count_requests(where_str, push_to, callback_function_string="", num_form="yes", req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_num_data";

        }
      
      }
      
   get_requests("count(*) as tot_item_count", qwhere_str, "tot_item_count", "",""+callback_function_string_str+":"+push_to+"|tot_item_count", "","",req_url);
   ///get_requests(requests_colstr, requests_filter_col, requests_cols, requests_node_function_name, requests_callback_function_string, requests_ui_tag, requests_pagination, req_url="") 

}


//qddata
function qrequests_ddata(where_str, disp_col , push_to, callback_function_string="",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_ddata";

      
      }
      
   get_requests("*", qwhere_str, disp_col, "", ""+callback_function_string_str+":"+push_to+"|"+disp_col+"", "","",req_url);
   ///get_requests(requests_colstr, requests_filter_col, requests_cols, requests_node_function_name, requests_callback_function_string, requests_ui_tag, requests_pagination, req_url="")    

}



//sum 

function sum_requests(sum_col, where_str, push_to, callback_function_string="", num_form="yes",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_ddata";

        }
      
      }
      
   get_requests("sum("+sum_col+") as tot_item_sum", qwhere_str, "tot_item_sum", "",""+callback_function_string_str+":"+push_to+"|tot_item_sum", "","",req_url);
   ///get_requests(requests_colstr, requests_filter_col, requests_cols, requests_node_function_name, requests_callback_function_string, requests_ui_tag, requests_pagination, req_url="")

}


///request handlers 

function requests_ins_(formid, required_inp=null, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "requests_insert_btn", callback_function_string_str, req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
}

function requests_updt_(formid, required_inp, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }

	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "requests_update_btn", callback_function_string_str,req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
      

}


function requests_rem_(req_token, callback_function_string="",req_url="")
{


	///alert(req_token+" --"+callback_function_string);

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get('conf_deleterequests&requests_uptoken='+magic_clean_str(req_token)+'', callback_function_string_str,req_url="");

}


function grid_requests_updt_(updt_key,colstr,newcolval, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get("_grid_updt_="+btoa('requests')+"&updt_key="+btoa(updt_key)+"&colstr="+btoa(colstr)+"&newcolval="+btoa(newcolval)+"&editor="+btoa('primkey')+"", callback_function_string_str,req_url="");

}
   

    //Start get  section_blocks Data ===============
    
      function get_section_blocks(section_blocks_colstr, section_blocks_filter_col, section_blocks_cols, section_blocks_node_function_name, section_blocks_callback_function_string, section_blocks_ui_tag, section_blocks_pagination, req_url="")
      {
        mosyflex_sel("section_blocks", section_blocks_colstr, section_blocks_filter_col , section_blocks_cols, section_blocks_node_function_name, section_blocks_callback_function_string, section_blocks_ui_tag, section_blocks_pagination,req_url);
        
      }
    //End get  section_blocks Data ===============

    //Start insert  section_blocks Data ===============

	function add_section_blocks(section_blocks_cols, section_blocks_vals, section_blocks_callback_function_string)
    {
		
        mosyajax_create_data("section_blocks", section_blocks_cols, section_blocks_vals, section_blocks_callback_function_string);
     }
     
    //End insert  section_blocks Data ===============

    
    //Start update  section_blocks Data ===============

    function update_section_blocks(section_blocks_update_str, section_blocks_where_str, section_blocks_callback_function_string){
    
		mosyajax_update("section_blocks", section_blocks_update_str, section_blocks_where_str, section_blocks_callback_function_string)
    
    }
    //end  update  section_blocks Data ===============

	//Start drop  section_blocks Data ===============
    function section_blocks_drop(section_blocks_where_str, section_blocks_callback_function_string)
    {
        mosyajax_drop("section_blocks", section_blocks_where_str, section_blocks_callback_function_string)

    }
	//End drop  section_blocks Data ===============
    
    function initialize_section_blocks(qstr="", section_blocks_callback_function_string="",req_url="")
    {
    
    ///alert(qstr);
      var section_blocks_token_query =qstr;
      if(qstr=="")
      {
       var section_blocks_token_query_param="";
       var section_blocks_js_uptoken=mosy_get_param("section_blocks_uptoken");
       //alert(section_blocks_js_uptoken);
       if(section_blocks_js_uptoken!==undefined)
       {
       
        section_blocks_token_query_param = atob(section_blocks_js_uptoken);
       }
        section_blocks_token_query = " where primkey='"+(section_blocks_token_query_param)+"'";
        
           if (document.getElementById("section_blocks_uptoken") !==null) {
           	if(document.getElementById("section_blocks_uptoken").value!="")
            {
            
            var section_blocks_atob_tbl_key =atob(document.getElementById("section_blocks_uptoken").value);
            
                   
            section_blocks_token_query = " where primkey='"+(section_blocks_atob_tbl_key)+"'";

            }
           }
      }
      
      var section_blocks_push_ui_data_to =section_blocks_callback_function_string;
      if(section_blocks_callback_function_string=="")
      {
      section_blocks_push_ui_data_to = "add_section_blocks_ui_data";
      }
                
      console.log(section_blocks_token_query+" -- "+section_blocks_js_uptoken);

	  //alert(section_blocks_push_ui_data_to);

     get_section_blocks("*", section_blocks_token_query, "primkey", "blackhole", section_blocks_push_ui_data_to, "", "", req_url);
     
     ///get_section_blocks(section_blocks_colstr, section_blocks_filter_col, section_blocks_cols, section_blocks_node_function_name, section_blocks_callback_function_string, section_blocks_ui_tag, section_blocks_pagination, req_url="")
    }
    
    function add_section_blocks_ui_data(section_blocks_server_resp) 
    {
    
    ///alert(section_blocks_server_resp);
    
    var json_decoded_str=JSON.parse(section_blocks_server_resp)[0];
    
      var keys = Object.keys(json_decoded_str);

      for (var i = 0; i < keys.length; i++) {
          var val = json_decoded_str[keys[i]];
          ///console.log(" Key -- "+keys[i]+" val -- "+val);
          
          mosy_push_data("txt_"+keys[i], val);
          mosy_push_data("txt_"+keys[i]+"_disp", val);
          mosy_push_data("div_txt_"+keys[i], val);
          mosy_push_data("src_"+keys[i], val);
          mosy_push_data("href_"+keys[i], val);
          mosy_push_data("sel_"+keys[i], val);
          mosy_push_data_class("mosy_data_"+keys[i], val);
          
          // use val
      }
        
    }
    

    ///=============== load section_blocks data on the fly ==============
    
	var gft_section_blocks_str="(skey LIKE '%{{qsection_blocks}}%' OR  section_code LIKE '%{{qsection_blocks}}%' OR  station_id LIKE '%{{qsection_blocks}}%' OR  to_station LIKE '%{{qsection_blocks}}%' OR  starting_xy LIKE '%{{qsection_blocks}}%' OR  end_xy LIKE '%{{qsection_blocks}}%' OR  speed_limit LIKE '%{{qsection_blocks}}%' OR  status LIKE '%{{qsection_blocks}}%' OR  section_type LIKE '%{{qsection_blocks}}%' OR  added_on LIKE '%{{qsection_blocks}}%' OR  setion_description LIKE '%{{qsection_blocks}}%' OR  zone LIKE '%{{qsection_blocks}}%' OR  line_id LIKE '%{{qsection_blocks}}%' OR  line_name LIKE '%{{qsection_blocks}}%' OR  from_stn_name LIKE '%{{qsection_blocks}}%' OR  to_stn_name LIKE '%{{qsection_blocks}}%' OR  added_by LIKE '%{{qsection_blocks}}%')";
    
    function  gft_section_blocks(qsection_blocks_str)
    {
        	var clean_section_blocks_filter_str=gft_section_blocks_str.replace(/{{qsection_blocks}}/g, magic_clean_str(qsection_blocks_str));
            
            return  clean_section_blocks_filter_str;

    }
    
    function load_section_blocks(section_blocks_qstr, section_blocks_where_str, section_blocks_ret_cols, section_blocks_user_function, section_blocks_result_function, section_blocks_data_tray, req_url="")
    {
    
    var fsection_blocks_result_function="push_result";
      
    if(section_blocks_result_function!="")
    {
          var fsection_blocks_result_function=section_blocks_result_function;

    }
    	var clean_section_blocks_filter_str=gft_section_blocks_str.replace(/{{qsection_blocks}}/g, magic_clean_str(section_blocks_qstr));
        
        var fsection_blocks_where_str=" where "+clean_section_blocks_filter_str;

    if(section_blocks_where_str!="")
    {
          var fsection_blocks_where_str=" "+section_blocks_where_str;

    }
       
      get_section_blocks("*", fsection_blocks_where_str, section_blocks_ret_cols, section_blocks_user_function, fsection_blocks_result_function, section_blocks_data_tray,"",req_url);
      ////get_section_blocks(section_blocks_colstr, section_blocks_filter_col, section_blocks_cols, section_blocks_node_function_name, section_blocks_callback_function_string, section_blocks_ui_tag, section_blocks_pagination, req_url="")
    }
    ///=============== load section_blocks data on the fly ==============


 ///=quick load 
 
function qkload_section_blocks(qstr, push_fun="", ui_card="", and_query="", additional_cols="", section_blocks_pagination="",req_url="")
{

	var section_blocks_list_nodes_str=section_blocks_list_nodes;
  
   if(ui_card!="")
   {
      section_blocks_list_nodes_str=ui_card;
   }
   
   var section_blocks_qret_fun="push_grid_result:section_blocks_tbl_list";
   
   if(push_fun!="")
   {
    section_blocks_qret_fun=push_fun;
   }
   
   var combined_query ="";
   
   if(and_query!="")
   {
   combined_query=" and "+and_query;
   }
   
   var additional_cols_str=","+additional_cols;
   
   if(additional_cols=="")
   {
   	 additional_cols_str="";
   }
   
   get_section_blocks("*", ajaxw+" ("+gft_section_blocks(qstr)+") "+combined_query+"  order by primkey desc ", section_blocks_list_cols+additional_cols_str, "",section_blocks_qret_fun, "c=>"+section_blocks_list_nodes_str, section_blocks_pagination, req_url);
   ///get_section_blocks(section_blocks_colstr, section_blocks_filter_col, section_blocks_cols, section_blocks_node_function_name, section_blocks_callback_function_string, section_blocks_ui_tag, section_blocks_pagination, req_url="")               
}


////////////// arithmetic function 


//count 

function count_section_blocks(where_str, push_to, callback_function_string="", num_form="yes", req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_num_data";

        }
      
      }
      
   get_section_blocks("count(*) as tot_item_count", qwhere_str, "tot_item_count", "",""+callback_function_string_str+":"+push_to+"|tot_item_count", "","",req_url);
   ///get_section_blocks(section_blocks_colstr, section_blocks_filter_col, section_blocks_cols, section_blocks_node_function_name, section_blocks_callback_function_string, section_blocks_ui_tag, section_blocks_pagination, req_url="") 

}


//qddata
function qsection_blocks_ddata(where_str, disp_col , push_to, callback_function_string="",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_ddata";

      
      }
      
   get_section_blocks("*", qwhere_str, disp_col, "", ""+callback_function_string_str+":"+push_to+"|"+disp_col+"", "","",req_url);
   ///get_section_blocks(section_blocks_colstr, section_blocks_filter_col, section_blocks_cols, section_blocks_node_function_name, section_blocks_callback_function_string, section_blocks_ui_tag, section_blocks_pagination, req_url="")    

}



//sum 

function sum_section_blocks(sum_col, where_str, push_to, callback_function_string="", num_form="yes",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_ddata";

        }
      
      }
      
   get_section_blocks("sum("+sum_col+") as tot_item_sum", qwhere_str, "tot_item_sum", "",""+callback_function_string_str+":"+push_to+"|tot_item_sum", "","",req_url);
   ///get_section_blocks(section_blocks_colstr, section_blocks_filter_col, section_blocks_cols, section_blocks_node_function_name, section_blocks_callback_function_string, section_blocks_ui_tag, section_blocks_pagination, req_url="")

}


///request handlers 

function section_blocks_ins_(formid, required_inp=null, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "section_blocks_insert_btn", callback_function_string_str, req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
}

function section_blocks_updt_(formid, required_inp, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }

	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "section_blocks_update_btn", callback_function_string_str,req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
      

}


function section_blocks_rem_(req_token, callback_function_string="",req_url="")
{


	///alert(req_token+" --"+callback_function_string);

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get('conf_deletesection_blocks&section_blocks_uptoken='+magic_clean_str(req_token)+'', callback_function_string_str,req_url="");

}


function grid_section_blocks_updt_(updt_key,colstr,newcolval, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get("_grid_updt_="+btoa('section_blocks')+"&updt_key="+btoa(updt_key)+"&colstr="+btoa(colstr)+"&newcolval="+btoa(newcolval)+"&editor="+btoa('primkey')+"", callback_function_string_str,req_url="");

}
   

    //Start get  stations Data ===============
    
      function get_stations(stations_colstr, stations_filter_col, stations_cols, stations_node_function_name, stations_callback_function_string, stations_ui_tag, stations_pagination, req_url="")
      {
        mosyflex_sel("stations", stations_colstr, stations_filter_col , stations_cols, stations_node_function_name, stations_callback_function_string, stations_ui_tag, stations_pagination,req_url);
        
      }
    //End get  stations Data ===============

    //Start insert  stations Data ===============

	function add_stations(stations_cols, stations_vals, stations_callback_function_string)
    {
		
        mosyajax_create_data("stations", stations_cols, stations_vals, stations_callback_function_string);
     }
     
    //End insert  stations Data ===============

    
    //Start update  stations Data ===============

    function update_stations(stations_update_str, stations_where_str, stations_callback_function_string){
    
		mosyajax_update("stations", stations_update_str, stations_where_str, stations_callback_function_string)
    
    }
    //end  update  stations Data ===============

	//Start drop  stations Data ===============
    function stations_drop(stations_where_str, stations_callback_function_string)
    {
        mosyajax_drop("stations", stations_where_str, stations_callback_function_string)

    }
	//End drop  stations Data ===============
    
    function initialize_stations(qstr="", stations_callback_function_string="",req_url="")
    {
    
    ///alert(qstr);
      var stations_token_query =qstr;
      if(qstr=="")
      {
       var stations_token_query_param="";
       var stations_js_uptoken=mosy_get_param("stations_uptoken");
       //alert(stations_js_uptoken);
       if(stations_js_uptoken!==undefined)
       {
       
        stations_token_query_param = atob(stations_js_uptoken);
       }
        stations_token_query = " where primkey='"+(stations_token_query_param)+"'";
        
           if (document.getElementById("stations_uptoken") !==null) {
           	if(document.getElementById("stations_uptoken").value!="")
            {
            
            var stations_atob_tbl_key =atob(document.getElementById("stations_uptoken").value);
            
                   
            stations_token_query = " where primkey='"+(stations_atob_tbl_key)+"'";

            }
           }
      }
      
      var stations_push_ui_data_to =stations_callback_function_string;
      if(stations_callback_function_string=="")
      {
      stations_push_ui_data_to = "add_stations_ui_data";
      }
                
      console.log(stations_token_query+" -- "+stations_js_uptoken);

	  //alert(stations_push_ui_data_to);

     get_stations("*", stations_token_query, "primkey", "blackhole", stations_push_ui_data_to, "", "", req_url);
     
     ///get_stations(stations_colstr, stations_filter_col, stations_cols, stations_node_function_name, stations_callback_function_string, stations_ui_tag, stations_pagination, req_url="")
    }
    
    function add_stations_ui_data(stations_server_resp) 
    {
    
    ///alert(stations_server_resp);
    
    var json_decoded_str=JSON.parse(stations_server_resp)[0];
    
      var keys = Object.keys(json_decoded_str);

      for (var i = 0; i < keys.length; i++) {
          var val = json_decoded_str[keys[i]];
          ///console.log(" Key -- "+keys[i]+" val -- "+val);
          
          mosy_push_data("txt_"+keys[i], val);
          mosy_push_data("txt_"+keys[i]+"_disp", val);
          mosy_push_data("div_txt_"+keys[i], val);
          mosy_push_data("src_"+keys[i], val);
          mosy_push_data("href_"+keys[i], val);
          mosy_push_data("sel_"+keys[i], val);
          mosy_push_data_class("mosy_data_"+keys[i], val);
          
          // use val
      }
        
    }
    

    ///=============== load stations data on the fly ==============
    
	var gft_stations_str="(station_id LIKE '%{{qstations}}%' OR  station_name LIKE '%{{qstations}}%' OR  station_code LIKE '%{{qstations}}%' OR  station_type LIKE '%{{qstations}}%' OR  station_length LIKE '%{{qstations}}%' OR  geofence LIKE '%{{qstations}}%' OR  remark LIKE '%{{qstations}}%' OR  station_location LIKE '%{{qstations}}%' OR  loop_line_position LIKE '%{{qstations}}%' OR  speed_limit LIKE '%{{qstations}}%' OR  station_number LIKE '%{{qstations}}%' OR  geofence_seed LIKE '%{{qstations}}%' OR  geofence_buffer LIKE '%{{qstations}}%')";
    
    function  gft_stations(qstations_str)
    {
        	var clean_stations_filter_str=gft_stations_str.replace(/{{qstations}}/g, magic_clean_str(qstations_str));
            
            return  clean_stations_filter_str;

    }
    
    function load_stations(stations_qstr, stations_where_str, stations_ret_cols, stations_user_function, stations_result_function, stations_data_tray, req_url="")
    {
    
    var fstations_result_function="push_result";
      
    if(stations_result_function!="")
    {
          var fstations_result_function=stations_result_function;

    }
    	var clean_stations_filter_str=gft_stations_str.replace(/{{qstations}}/g, magic_clean_str(stations_qstr));
        
        var fstations_where_str=" where "+clean_stations_filter_str;

    if(stations_where_str!="")
    {
          var fstations_where_str=" "+stations_where_str;

    }
       
      get_stations("*", fstations_where_str, stations_ret_cols, stations_user_function, fstations_result_function, stations_data_tray,"",req_url);
      ////get_stations(stations_colstr, stations_filter_col, stations_cols, stations_node_function_name, stations_callback_function_string, stations_ui_tag, stations_pagination, req_url="")
    }
    ///=============== load stations data on the fly ==============


 ///=quick load 
 
function qkload_stations(qstr, push_fun="", ui_card="", and_query="", additional_cols="", stations_pagination="",req_url="")
{

	var stations_list_nodes_str=stations_list_nodes;
  
   if(ui_card!="")
   {
      stations_list_nodes_str=ui_card;
   }
   
   var stations_qret_fun="push_grid_result:stations_tbl_list";
   
   if(push_fun!="")
   {
    stations_qret_fun=push_fun;
   }
   
   var combined_query ="";
   
   if(and_query!="")
   {
   combined_query=" and "+and_query;
   }
   
   var additional_cols_str=","+additional_cols;
   
   if(additional_cols=="")
   {
   	 additional_cols_str="";
   }
   
   get_stations("*", ajaxw+" ("+gft_stations(qstr)+") "+combined_query+"  order by primkey desc ", stations_list_cols+additional_cols_str, "",stations_qret_fun, "c=>"+stations_list_nodes_str, stations_pagination, req_url);
   ///get_stations(stations_colstr, stations_filter_col, stations_cols, stations_node_function_name, stations_callback_function_string, stations_ui_tag, stations_pagination, req_url="")               
}


////////////// arithmetic function 


//count 

function count_stations(where_str, push_to, callback_function_string="", num_form="yes", req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_num_data";

        }
      
      }
      
   get_stations("count(*) as tot_item_count", qwhere_str, "tot_item_count", "",""+callback_function_string_str+":"+push_to+"|tot_item_count", "","",req_url);
   ///get_stations(stations_colstr, stations_filter_col, stations_cols, stations_node_function_name, stations_callback_function_string, stations_ui_tag, stations_pagination, req_url="") 

}


//qddata
function qstations_ddata(where_str, disp_col , push_to, callback_function_string="",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_ddata";

      
      }
      
   get_stations("*", qwhere_str, disp_col, "", ""+callback_function_string_str+":"+push_to+"|"+disp_col+"", "","",req_url);
   ///get_stations(stations_colstr, stations_filter_col, stations_cols, stations_node_function_name, stations_callback_function_string, stations_ui_tag, stations_pagination, req_url="")    

}



//sum 

function sum_stations(sum_col, where_str, push_to, callback_function_string="", num_form="yes",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_ddata";

        }
      
      }
      
   get_stations("sum("+sum_col+") as tot_item_sum", qwhere_str, "tot_item_sum", "",""+callback_function_string_str+":"+push_to+"|tot_item_sum", "","",req_url);
   ///get_stations(stations_colstr, stations_filter_col, stations_cols, stations_node_function_name, stations_callback_function_string, stations_ui_tag, stations_pagination, req_url="")

}


///request handlers 

function stations_ins_(formid, required_inp=null, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "stations_insert_btn", callback_function_string_str, req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
}

function stations_updt_(formid, required_inp, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }

	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "stations_update_btn", callback_function_string_str,req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
      

}


function stations_rem_(req_token, callback_function_string="",req_url="")
{


	///alert(req_token+" --"+callback_function_string);

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get('conf_deletestations&stations_uptoken='+magic_clean_str(req_token)+'', callback_function_string_str,req_url="");

}


function grid_stations_updt_(updt_key,colstr,newcolval, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get("_grid_updt_="+btoa('stations')+"&updt_key="+btoa(updt_key)+"&colstr="+btoa(colstr)+"&newcolval="+btoa(newcolval)+"&editor="+btoa('primkey')+"", callback_function_string_str,req_url="");

}
   

    //Start get  system_files Data ===============
    
      function get_system_files(system_files_colstr, system_files_filter_col, system_files_cols, system_files_node_function_name, system_files_callback_function_string, system_files_ui_tag, system_files_pagination, req_url="")
      {
        mosyflex_sel("system_files", system_files_colstr, system_files_filter_col , system_files_cols, system_files_node_function_name, system_files_callback_function_string, system_files_ui_tag, system_files_pagination,req_url);
        
      }
    //End get  system_files Data ===============

    //Start insert  system_files Data ===============

	function add_system_files(system_files_cols, system_files_vals, system_files_callback_function_string)
    {
		
        mosyajax_create_data("system_files", system_files_cols, system_files_vals, system_files_callback_function_string);
     }
     
    //End insert  system_files Data ===============

    
    //Start update  system_files Data ===============

    function update_system_files(system_files_update_str, system_files_where_str, system_files_callback_function_string){
    
		mosyajax_update("system_files", system_files_update_str, system_files_where_str, system_files_callback_function_string)
    
    }
    //end  update  system_files Data ===============

	//Start drop  system_files Data ===============
    function system_files_drop(system_files_where_str, system_files_callback_function_string)
    {
        mosyajax_drop("system_files", system_files_where_str, system_files_callback_function_string)

    }
	//End drop  system_files Data ===============
    
    function initialize_system_files(qstr="", system_files_callback_function_string="",req_url="")
    {
    
    ///alert(qstr);
      var system_files_token_query =qstr;
      if(qstr=="")
      {
       var system_files_token_query_param="";
       var system_files_js_uptoken=mosy_get_param("system_files_uptoken");
       //alert(system_files_js_uptoken);
       if(system_files_js_uptoken!==undefined)
       {
       
        system_files_token_query_param = atob(system_files_js_uptoken);
       }
        system_files_token_query = " where primkey='"+(system_files_token_query_param)+"'";
        
           if (document.getElementById("system_files_uptoken") !==null) {
           	if(document.getElementById("system_files_uptoken").value!="")
            {
            
            var system_files_atob_tbl_key =atob(document.getElementById("system_files_uptoken").value);
            
                   
            system_files_token_query = " where primkey='"+(system_files_atob_tbl_key)+"'";

            }
           }
      }
      
      var system_files_push_ui_data_to =system_files_callback_function_string;
      if(system_files_callback_function_string=="")
      {
      system_files_push_ui_data_to = "add_system_files_ui_data";
      }
                
      console.log(system_files_token_query+" -- "+system_files_js_uptoken);

	  //alert(system_files_push_ui_data_to);

     get_system_files("*", system_files_token_query, "primkey", "blackhole", system_files_push_ui_data_to, "", "", req_url);
     
     ///get_system_files(system_files_colstr, system_files_filter_col, system_files_cols, system_files_node_function_name, system_files_callback_function_string, system_files_ui_tag, system_files_pagination, req_url="")
    }
    
    function add_system_files_ui_data(system_files_server_resp) 
    {
    
    ///alert(system_files_server_resp);
    
    var json_decoded_str=JSON.parse(system_files_server_resp)[0];
    
      var keys = Object.keys(json_decoded_str);

      for (var i = 0; i < keys.length; i++) {
          var val = json_decoded_str[keys[i]];
          ///console.log(" Key -- "+keys[i]+" val -- "+val);
          
          mosy_push_data("txt_"+keys[i], val);
          mosy_push_data("txt_"+keys[i]+"_disp", val);
          mosy_push_data("div_txt_"+keys[i], val);
          mosy_push_data("src_"+keys[i], val);
          mosy_push_data("href_"+keys[i], val);
          mosy_push_data("sel_"+keys[i], val);
          mosy_push_data_class("mosy_data_"+keys[i], val);
          
          // use val
      }
        
    }
    

    ///=============== load system_files data on the fly ==============
    
	var gft_system_files_str="(fileid LIKE '%{{qsystem_files}}%' OR  item_id LIKE '%{{qsystem_files}}%' OR  file_url LIKE '%{{qsystem_files}}%' OR  file_type LIKE '%{{qsystem_files}}%' OR  ref_id LIKE '%{{qsystem_files}}%' OR  upload_date LIKE '%{{qsystem_files}}%')";
    
    function  gft_system_files(qsystem_files_str)
    {
        	var clean_system_files_filter_str=gft_system_files_str.replace(/{{qsystem_files}}/g, magic_clean_str(qsystem_files_str));
            
            return  clean_system_files_filter_str;

    }
    
    function load_system_files(system_files_qstr, system_files_where_str, system_files_ret_cols, system_files_user_function, system_files_result_function, system_files_data_tray, req_url="")
    {
    
    var fsystem_files_result_function="push_result";
      
    if(system_files_result_function!="")
    {
          var fsystem_files_result_function=system_files_result_function;

    }
    	var clean_system_files_filter_str=gft_system_files_str.replace(/{{qsystem_files}}/g, magic_clean_str(system_files_qstr));
        
        var fsystem_files_where_str=" where "+clean_system_files_filter_str;

    if(system_files_where_str!="")
    {
          var fsystem_files_where_str=" "+system_files_where_str;

    }
       
      get_system_files("*", fsystem_files_where_str, system_files_ret_cols, system_files_user_function, fsystem_files_result_function, system_files_data_tray,"",req_url);
      ////get_system_files(system_files_colstr, system_files_filter_col, system_files_cols, system_files_node_function_name, system_files_callback_function_string, system_files_ui_tag, system_files_pagination, req_url="")
    }
    ///=============== load system_files data on the fly ==============


 ///=quick load 
 
function qkload_system_files(qstr, push_fun="", ui_card="", and_query="", additional_cols="", system_files_pagination="",req_url="")
{

	var system_files_list_nodes_str=system_files_list_nodes;
  
   if(ui_card!="")
   {
      system_files_list_nodes_str=ui_card;
   }
   
   var system_files_qret_fun="push_grid_result:system_files_tbl_list";
   
   if(push_fun!="")
   {
    system_files_qret_fun=push_fun;
   }
   
   var combined_query ="";
   
   if(and_query!="")
   {
   combined_query=" and "+and_query;
   }
   
   var additional_cols_str=","+additional_cols;
   
   if(additional_cols=="")
   {
   	 additional_cols_str="";
   }
   
   get_system_files("*", ajaxw+" ("+gft_system_files(qstr)+") "+combined_query+"  order by primkey desc ", system_files_list_cols+additional_cols_str, "",system_files_qret_fun, "c=>"+system_files_list_nodes_str, system_files_pagination, req_url);
   ///get_system_files(system_files_colstr, system_files_filter_col, system_files_cols, system_files_node_function_name, system_files_callback_function_string, system_files_ui_tag, system_files_pagination, req_url="")               
}


////////////// arithmetic function 


//count 

function count_system_files(where_str, push_to, callback_function_string="", num_form="yes", req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_num_data";

        }
      
      }
      
   get_system_files("count(*) as tot_item_count", qwhere_str, "tot_item_count", "",""+callback_function_string_str+":"+push_to+"|tot_item_count", "","",req_url);
   ///get_system_files(system_files_colstr, system_files_filter_col, system_files_cols, system_files_node_function_name, system_files_callback_function_string, system_files_ui_tag, system_files_pagination, req_url="") 

}


//qddata
function qsystem_files_ddata(where_str, disp_col , push_to, callback_function_string="",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_ddata";

      
      }
      
   get_system_files("*", qwhere_str, disp_col, "", ""+callback_function_string_str+":"+push_to+"|"+disp_col+"", "","",req_url);
   ///get_system_files(system_files_colstr, system_files_filter_col, system_files_cols, system_files_node_function_name, system_files_callback_function_string, system_files_ui_tag, system_files_pagination, req_url="")    

}



//sum 

function sum_system_files(sum_col, where_str, push_to, callback_function_string="", num_form="yes",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_ddata";

        }
      
      }
      
   get_system_files("sum("+sum_col+") as tot_item_sum", qwhere_str, "tot_item_sum", "",""+callback_function_string_str+":"+push_to+"|tot_item_sum", "","",req_url);
   ///get_system_files(system_files_colstr, system_files_filter_col, system_files_cols, system_files_node_function_name, system_files_callback_function_string, system_files_ui_tag, system_files_pagination, req_url="")

}


///request handlers 

function system_files_ins_(formid, required_inp=null, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "system_files_insert_btn", callback_function_string_str, req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
}

function system_files_updt_(formid, required_inp, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }

	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "system_files_update_btn", callback_function_string_str,req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
      

}


function system_files_rem_(req_token, callback_function_string="",req_url="")
{


	///alert(req_token+" --"+callback_function_string);

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get('conf_deletesystem_files&system_files_uptoken='+magic_clean_str(req_token)+'', callback_function_string_str,req_url="");

}


function grid_system_files_updt_(updt_key,colstr,newcolval, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get("_grid_updt_="+btoa('system_files')+"&updt_key="+btoa(updt_key)+"&colstr="+btoa(colstr)+"&newcolval="+btoa(newcolval)+"&editor="+btoa('primkey')+"", callback_function_string_str,req_url="");

}
   

    //Start get  system_settings Data ===============
    
      function get_system_settings(system_settings_colstr, system_settings_filter_col, system_settings_cols, system_settings_node_function_name, system_settings_callback_function_string, system_settings_ui_tag, system_settings_pagination, req_url="")
      {
        mosyflex_sel("system_settings", system_settings_colstr, system_settings_filter_col , system_settings_cols, system_settings_node_function_name, system_settings_callback_function_string, system_settings_ui_tag, system_settings_pagination,req_url);
        
      }
    //End get  system_settings Data ===============

    //Start insert  system_settings Data ===============

	function add_system_settings(system_settings_cols, system_settings_vals, system_settings_callback_function_string)
    {
		
        mosyajax_create_data("system_settings", system_settings_cols, system_settings_vals, system_settings_callback_function_string);
     }
     
    //End insert  system_settings Data ===============

    
    //Start update  system_settings Data ===============

    function update_system_settings(system_settings_update_str, system_settings_where_str, system_settings_callback_function_string){
    
		mosyajax_update("system_settings", system_settings_update_str, system_settings_where_str, system_settings_callback_function_string)
    
    }
    //end  update  system_settings Data ===============

	//Start drop  system_settings Data ===============
    function system_settings_drop(system_settings_where_str, system_settings_callback_function_string)
    {
        mosyajax_drop("system_settings", system_settings_where_str, system_settings_callback_function_string)

    }
	//End drop  system_settings Data ===============
    
    function initialize_system_settings(qstr="", system_settings_callback_function_string="",req_url="")
    {
    
    ///alert(qstr);
      var system_settings_token_query =qstr;
      if(qstr=="")
      {
       var system_settings_token_query_param="";
       var system_settings_js_uptoken=mosy_get_param("system_settings_uptoken");
       //alert(system_settings_js_uptoken);
       if(system_settings_js_uptoken!==undefined)
       {
       
        system_settings_token_query_param = atob(system_settings_js_uptoken);
       }
        system_settings_token_query = " where primkey='"+(system_settings_token_query_param)+"'";
        
           if (document.getElementById("system_settings_uptoken") !==null) {
           	if(document.getElementById("system_settings_uptoken").value!="")
            {
            
            var system_settings_atob_tbl_key =atob(document.getElementById("system_settings_uptoken").value);
            
                   
            system_settings_token_query = " where primkey='"+(system_settings_atob_tbl_key)+"'";

            }
           }
      }
      
      var system_settings_push_ui_data_to =system_settings_callback_function_string;
      if(system_settings_callback_function_string=="")
      {
      system_settings_push_ui_data_to = "add_system_settings_ui_data";
      }
                
      console.log(system_settings_token_query+" -- "+system_settings_js_uptoken);

	  //alert(system_settings_push_ui_data_to);

     get_system_settings("*", system_settings_token_query, "primkey", "blackhole", system_settings_push_ui_data_to, "", "", req_url);
     
     ///get_system_settings(system_settings_colstr, system_settings_filter_col, system_settings_cols, system_settings_node_function_name, system_settings_callback_function_string, system_settings_ui_tag, system_settings_pagination, req_url="")
    }
    
    function add_system_settings_ui_data(system_settings_server_resp) 
    {
    
    ///alert(system_settings_server_resp);
    
    var json_decoded_str=JSON.parse(system_settings_server_resp)[0];
    
      var keys = Object.keys(json_decoded_str);

      for (var i = 0; i < keys.length; i++) {
          var val = json_decoded_str[keys[i]];
          ///console.log(" Key -- "+keys[i]+" val -- "+val);
          
          mosy_push_data("txt_"+keys[i], val);
          mosy_push_data("txt_"+keys[i]+"_disp", val);
          mosy_push_data("div_txt_"+keys[i], val);
          mosy_push_data("src_"+keys[i], val);
          mosy_push_data("href_"+keys[i], val);
          mosy_push_data("sel_"+keys[i], val);
          mosy_push_data_class("mosy_data_"+keys[i], val);
          
          // use val
      }
        
    }
    

    ///=============== load system_settings data on the fly ==============
    
	var gft_system_settings_str="(record_id LIKE '%{{qsystem_settings}}%' OR  system_key LIKE '%{{qsystem_settings}}%' OR  system_value LIKE '%{{qsystem_settings}}%' OR  setting_type LIKE '%{{qsystem_settings}}%' OR  line_edge_count LIKE '%{{qsystem_settings}}%')";
    
    function  gft_system_settings(qsystem_settings_str)
    {
        	var clean_system_settings_filter_str=gft_system_settings_str.replace(/{{qsystem_settings}}/g, magic_clean_str(qsystem_settings_str));
            
            return  clean_system_settings_filter_str;

    }
    
    function load_system_settings(system_settings_qstr, system_settings_where_str, system_settings_ret_cols, system_settings_user_function, system_settings_result_function, system_settings_data_tray, req_url="")
    {
    
    var fsystem_settings_result_function="push_result";
      
    if(system_settings_result_function!="")
    {
          var fsystem_settings_result_function=system_settings_result_function;

    }
    	var clean_system_settings_filter_str=gft_system_settings_str.replace(/{{qsystem_settings}}/g, magic_clean_str(system_settings_qstr));
        
        var fsystem_settings_where_str=" where "+clean_system_settings_filter_str;

    if(system_settings_where_str!="")
    {
          var fsystem_settings_where_str=" "+system_settings_where_str;

    }
       
      get_system_settings("*", fsystem_settings_where_str, system_settings_ret_cols, system_settings_user_function, fsystem_settings_result_function, system_settings_data_tray,"",req_url);
      ////get_system_settings(system_settings_colstr, system_settings_filter_col, system_settings_cols, system_settings_node_function_name, system_settings_callback_function_string, system_settings_ui_tag, system_settings_pagination, req_url="")
    }
    ///=============== load system_settings data on the fly ==============


 ///=quick load 
 
function qkload_system_settings(qstr, push_fun="", ui_card="", and_query="", additional_cols="", system_settings_pagination="",req_url="")
{

	var system_settings_list_nodes_str=system_settings_list_nodes;
  
   if(ui_card!="")
   {
      system_settings_list_nodes_str=ui_card;
   }
   
   var system_settings_qret_fun="push_grid_result:system_settings_tbl_list";
   
   if(push_fun!="")
   {
    system_settings_qret_fun=push_fun;
   }
   
   var combined_query ="";
   
   if(and_query!="")
   {
   combined_query=" and "+and_query;
   }
   
   var additional_cols_str=","+additional_cols;
   
   if(additional_cols=="")
   {
   	 additional_cols_str="";
   }
   
   get_system_settings("*", ajaxw+" ("+gft_system_settings(qstr)+") "+combined_query+"  order by primkey desc ", system_settings_list_cols+additional_cols_str, "",system_settings_qret_fun, "c=>"+system_settings_list_nodes_str, system_settings_pagination, req_url);
   ///get_system_settings(system_settings_colstr, system_settings_filter_col, system_settings_cols, system_settings_node_function_name, system_settings_callback_function_string, system_settings_ui_tag, system_settings_pagination, req_url="")               
}


////////////// arithmetic function 


//count 

function count_system_settings(where_str, push_to, callback_function_string="", num_form="yes", req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_num_data";

        }
      
      }
      
   get_system_settings("count(*) as tot_item_count", qwhere_str, "tot_item_count", "",""+callback_function_string_str+":"+push_to+"|tot_item_count", "","",req_url);
   ///get_system_settings(system_settings_colstr, system_settings_filter_col, system_settings_cols, system_settings_node_function_name, system_settings_callback_function_string, system_settings_ui_tag, system_settings_pagination, req_url="") 

}


//qddata
function qsystem_settings_ddata(where_str, disp_col , push_to, callback_function_string="",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_ddata";

      
      }
      
   get_system_settings("*", qwhere_str, disp_col, "", ""+callback_function_string_str+":"+push_to+"|"+disp_col+"", "","",req_url);
   ///get_system_settings(system_settings_colstr, system_settings_filter_col, system_settings_cols, system_settings_node_function_name, system_settings_callback_function_string, system_settings_ui_tag, system_settings_pagination, req_url="")    

}



//sum 

function sum_system_settings(sum_col, where_str, push_to, callback_function_string="", num_form="yes",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_ddata";

        }
      
      }
      
   get_system_settings("sum("+sum_col+") as tot_item_sum", qwhere_str, "tot_item_sum", "",""+callback_function_string_str+":"+push_to+"|tot_item_sum", "","",req_url);
   ///get_system_settings(system_settings_colstr, system_settings_filter_col, system_settings_cols, system_settings_node_function_name, system_settings_callback_function_string, system_settings_ui_tag, system_settings_pagination, req_url="")

}


///request handlers 

function system_settings_ins_(formid, required_inp=null, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "system_settings_insert_btn", callback_function_string_str, req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
}

function system_settings_updt_(formid, required_inp, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }

	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "system_settings_update_btn", callback_function_string_str,req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
      

}


function system_settings_rem_(req_token, callback_function_string="",req_url="")
{


	///alert(req_token+" --"+callback_function_string);

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get('conf_deletesystem_settings&system_settings_uptoken='+magic_clean_str(req_token)+'', callback_function_string_str,req_url="");

}


function grid_system_settings_updt_(updt_key,colstr,newcolval, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get("_grid_updt_="+btoa('system_settings')+"&updt_key="+btoa(updt_key)+"&colstr="+btoa(colstr)+"&newcolval="+btoa(newcolval)+"&editor="+btoa('primkey')+"", callback_function_string_str,req_url="");

}
   

    //Start get  users Data ===============
    
      function get_users(users_colstr, users_filter_col, users_cols, users_node_function_name, users_callback_function_string, users_ui_tag, users_pagination, req_url="")
      {
        mosyflex_sel("users", users_colstr, users_filter_col , users_cols, users_node_function_name, users_callback_function_string, users_ui_tag, users_pagination,req_url);
        
      }
    //End get  users Data ===============

    //Start insert  users Data ===============

	function add_users(users_cols, users_vals, users_callback_function_string)
    {
		
        mosyajax_create_data("users", users_cols, users_vals, users_callback_function_string);
     }
     
    //End insert  users Data ===============

    
    //Start update  users Data ===============

    function update_users(users_update_str, users_where_str, users_callback_function_string){
    
		mosyajax_update("users", users_update_str, users_where_str, users_callback_function_string)
    
    }
    //end  update  users Data ===============

	//Start drop  users Data ===============
    function users_drop(users_where_str, users_callback_function_string)
    {
        mosyajax_drop("users", users_where_str, users_callback_function_string)

    }
	//End drop  users Data ===============
    
    function initialize_users(qstr="", users_callback_function_string="",req_url="")
    {
    
    ///alert(qstr);
      var users_token_query =qstr;
      if(qstr=="")
      {
       var users_token_query_param="";
       var users_js_uptoken=mosy_get_param("users_uptoken");
       //alert(users_js_uptoken);
       if(users_js_uptoken!==undefined)
       {
       
        users_token_query_param = atob(users_js_uptoken);
       }
        users_token_query = " where primkey='"+(users_token_query_param)+"'";
        
           if (document.getElementById("users_uptoken") !==null) {
           	if(document.getElementById("users_uptoken").value!="")
            {
            
            var users_atob_tbl_key =atob(document.getElementById("users_uptoken").value);
            
                   
            users_token_query = " where primkey='"+(users_atob_tbl_key)+"'";

            }
           }
      }
      
      var users_push_ui_data_to =users_callback_function_string;
      if(users_callback_function_string=="")
      {
      users_push_ui_data_to = "add_users_ui_data";
      }
                
      console.log(users_token_query+" -- "+users_js_uptoken);

	  //alert(users_push_ui_data_to);

     get_users("*", users_token_query, "primkey", "blackhole", users_push_ui_data_to, "", "", req_url);
     
     ///get_users(users_colstr, users_filter_col, users_cols, users_node_function_name, users_callback_function_string, users_ui_tag, users_pagination, req_url="")
    }
    
    function add_users_ui_data(users_server_resp) 
    {
    
    ///alert(users_server_resp);
    
    var json_decoded_str=JSON.parse(users_server_resp)[0];
    
      var keys = Object.keys(json_decoded_str);

      for (var i = 0; i < keys.length; i++) {
          var val = json_decoded_str[keys[i]];
          ///console.log(" Key -- "+keys[i]+" val -- "+val);
          
          mosy_push_data("txt_"+keys[i], val);
          mosy_push_data("txt_"+keys[i]+"_disp", val);
          mosy_push_data("div_txt_"+keys[i], val);
          mosy_push_data("src_"+keys[i], val);
          mosy_push_data("href_"+keys[i], val);
          mosy_push_data("sel_"+keys[i], val);
          mosy_push_data_class("mosy_data_"+keys[i], val);
          
          // use val
      }
        
    }
    

    ///=============== load users data on the fly ==============
    
	var gft_users_str="(user_id LIKE '%{{qusers}}%' OR  name LIKE '%{{qusers}}%' OR  email LIKE '%{{qusers}}%' OR  tel LIKE '%{{qusers}}%' OR  login_password LIKE '%{{qusers}}%' OR  ref_id LIKE '%{{qusers}}%' OR  regdate LIKE '%{{qusers}}%' OR  user_no LIKE '%{{qusers}}%' OR  user_pic LIKE '%{{qusers}}%' OR  user_gender LIKE '%{{qusers}}%' OR  last_seen LIKE '%{{qusers}}%' OR  about LIKE '%{{qusers}}%')";
    
    function  gft_users(qusers_str)
    {
        	var clean_users_filter_str=gft_users_str.replace(/{{qusers}}/g, magic_clean_str(qusers_str));
            
            return  clean_users_filter_str;

    }
    
    function load_users(users_qstr, users_where_str, users_ret_cols, users_user_function, users_result_function, users_data_tray, req_url="")
    {
    
    var fusers_result_function="push_result";
      
    if(users_result_function!="")
    {
          var fusers_result_function=users_result_function;

    }
    	var clean_users_filter_str=gft_users_str.replace(/{{qusers}}/g, magic_clean_str(users_qstr));
        
        var fusers_where_str=" where "+clean_users_filter_str;

    if(users_where_str!="")
    {
          var fusers_where_str=" "+users_where_str;

    }
       
      get_users("*", fusers_where_str, users_ret_cols, users_user_function, fusers_result_function, users_data_tray,"",req_url);
      ////get_users(users_colstr, users_filter_col, users_cols, users_node_function_name, users_callback_function_string, users_ui_tag, users_pagination, req_url="")
    }
    ///=============== load users data on the fly ==============


 ///=quick load 
 
function qkload_users(qstr, push_fun="", ui_card="", and_query="", additional_cols="", users_pagination="",req_url="")
{

	var users_list_nodes_str=users_list_nodes;
  
   if(ui_card!="")
   {
      users_list_nodes_str=ui_card;
   }
   
   var users_qret_fun="push_grid_result:users_tbl_list";
   
   if(push_fun!="")
   {
    users_qret_fun=push_fun;
   }
   
   var combined_query ="";
   
   if(and_query!="")
   {
   combined_query=" and "+and_query;
   }
   
   var additional_cols_str=","+additional_cols;
   
   if(additional_cols=="")
   {
   	 additional_cols_str="";
   }
   
   get_users("*", ajaxw+" ("+gft_users(qstr)+") "+combined_query+"  order by primkey desc ", users_list_cols+additional_cols_str, "",users_qret_fun, "c=>"+users_list_nodes_str, users_pagination, req_url);
   ///get_users(users_colstr, users_filter_col, users_cols, users_node_function_name, users_callback_function_string, users_ui_tag, users_pagination, req_url="")               
}


////////////// arithmetic function 


//count 

function count_users(where_str, push_to, callback_function_string="", num_form="yes", req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_num_data";

        }
      
      }
      
   get_users("count(*) as tot_item_count", qwhere_str, "tot_item_count", "",""+callback_function_string_str+":"+push_to+"|tot_item_count", "","",req_url);
   ///get_users(users_colstr, users_filter_col, users_cols, users_node_function_name, users_callback_function_string, users_ui_tag, users_pagination, req_url="") 

}


//qddata
function qusers_ddata(where_str, disp_col , push_to, callback_function_string="",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_ddata";

      
      }
      
   get_users("*", qwhere_str, disp_col, "", ""+callback_function_string_str+":"+push_to+"|"+disp_col+"", "","",req_url);
   ///get_users(users_colstr, users_filter_col, users_cols, users_node_function_name, users_callback_function_string, users_ui_tag, users_pagination, req_url="")    

}



//sum 

function sum_users(sum_col, where_str, push_to, callback_function_string="", num_form="yes",req_url="")
{
      var qwhere_str=" where "+where_str+" ";
      var callback_function_string_str=callback_function_string;
      
      if(where_str=="")
      {     
      qwhere_str="";
      }
      
      if(callback_function_string=="")      
      {
      
      	callback_function_string_str="mosy_push_num_ddata";
        if(num_form!="yes")
        {             	
          callback_function_string_str="mosy_push_ddata";

        }
      
      }
      
   get_users("sum("+sum_col+") as tot_item_sum", qwhere_str, "tot_item_sum", "",""+callback_function_string_str+":"+push_to+"|tot_item_sum", "","",req_url);
   ///get_users(users_colstr, users_filter_col, users_cols, users_node_function_name, users_callback_function_string, users_ui_tag, users_pagination, req_url="")

}


///request handlers 

function users_ins_(formid, required_inp=null, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "users_insert_btn", callback_function_string_str, req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
}

function users_updt_(formid, required_inp, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }

	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
      {
 
 		mosy_form_data(formid, "users_update_btn", callback_function_string_str,req_url);
        
  	  }else{
        magic_message(validate_msg, 'dialog_box');
      }
      

}


function users_rem_(req_token, callback_function_string="",req_url="")
{


	///alert(req_token+" --"+callback_function_string);

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get('conf_deleteusers&users_uptoken='+magic_clean_str(req_token)+'', callback_function_string_str,req_url="");

}


function grid_users_updt_(updt_key,colstr,newcolval, callback_function_string="",req_url="")
{

 var callback_function_string_str=callback_function_string;
 
 if(callback_function_string=="")
 
 {
 	callback_function_string_str="blackhole";
 }
 
 mosyajax_get("_grid_updt_="+btoa('users')+"&updt_key="+btoa(updt_key)+"&colstr="+btoa(colstr)+"&newcolval="+btoa(newcolval)+"&editor="+btoa('primkey')+"", callback_function_string_str,req_url="");

}
  //===============End Mosy queries-============

const mosy_msdn_elem = document.querySelectorAll('.mosy_msdn');

mosy_msdn_elem.forEach(el => el.addEventListener('click', event => {

var arguments = event.target.getAttribute("data-mosy_msdn");
  
eval(arguments);

}));

const mosy_tup_elem = document.querySelectorAll('.mosy_tup');

mosy_tup_elem.forEach(el => el.addEventListener('keyup', event => {

var arguments = event.target.getAttribute("data-mosy_tup");
  
eval(arguments);

}));
  
var def_ajax_url ="./ajaxreqhandler.php";

function mosy_ajax_url(url="")
{
 if(url=="")
 {
  url=def_ajax_url;
 }
 
 return url;
}

var ajax_url = mosy_ajax_url(def_ajax_url);

var mosyajax_sql_url=ajax_url;
   //Ajax Manager
function mosyflex_sel(tbl, colstr, filter_col , cols, node_function_name, callback_function_string, ui_tag, pagination="", req_url="")
{
//alert(filter_col);
///alert(pagination);
///alert(req_url);
    
    if(req_url=="")
    {
     req_url=ajax_url;
    }

    var clean_ui1=ui_tag.replace(/</g, "{{<}}");
    var clean_ui2=clean_ui1.replace(/>/g, "{{>}}");
    var clean_ui3=clean_ui2.replace(/onclick/g, "{{on click}}");
    var clean_ui4=clean_ui3.replace(/onkeyup/g, "{{on keyup}}");
    var clean_ui5=clean_ui4.replace(/onchange/g, "{{on change}}");
    var clean_ui=btoa(clean_ui5);
    
  	var pagination_token=1;
    var pagination_name=pagination;
    
    if(pagination.indexOf(":") >= 0)
  	{
      pagination_token_expl=pagination.split(":");
      pagination_token=pagination_token_expl[1];
      pagination_name=pagination_token_expl[0];
    }
    
  
    var json_params_str={"mosyajax_sql_data":filter_col, "colstr":colstr, "cols":cols, "node_function_name":node_function_name, "tbl":tbl, "ui_tag":clean_ui,"pagination":pagination_name};
   
  	//alert(clean_ui);
  
  //alert(pagination_name);
  //alert(pagination_token);
  
    if(pagination_token>1)
    {
		mosy_ajax_post(req_url+"?"+pagination_name+"="+btoa(pagination_token), json_params_str, callback_function_string, "");
    }else{
		mosy_ajax_post(req_url, json_params_str, callback_function_string, "");

    }
}


function mosy_next_page(elem_id)
{
  if(get_newval(elem_id)=="")
  {
  	push_newval(elem_id,0)
  }
  var next_token_no=parseInt(get_newval(elem_id))+1;
  
  push_newval(elem_id, next_token_no);
  
  return next_token_no;
}

function mosy_prev_page(elem_id)
{
  if(get_newval(elem_id)=="")
  {
  	push_newval(elem_id,0)
  }
  var next_token_no=parseInt(get_newval(elem_id))-1;
  
  if(next_token_no<=0)
  {
  next_token_no=1;
  }
  
  push_newval(elem_id, next_token_no);
  
  return next_token_no;
}

function push_result(server_resp, additional_callbacks)
{
  //alert(server_resp);
  
  var str_to_display=server_resp+'<div class="col-md-12 p-0 text-right"><span class="badge cpointer" style="font-size:10px;"><i class="fa fa-times-circle"></i> Close</span></div>';
  
  if(server_resp.toString().trim()=='')
  {
  	var str_to_display='<div class="row justify-content-center p-2 mb-3 text-center col-md-12 no_data_tray"> <div class=" text-wrap col-md-12"><i class="fa fa-search"></i> Sorry. We didn`t find results matching this request.<hr></div> <div class="col-md-6 text-dark text-center cpointer  p-1 rounded mb-3"><i class="fa fa-star"></i> Lets try a new search</div> </div>';
  }
  
  
  if (document.getElementById(additional_callbacks) !==null) {
        
  document.getElementById(additional_callbacks).style.display="block";
  document.getElementById(additional_callbacks).innerHTML=str_to_display;
        
    }else{
          
    document.getElementById("result").innerHTML=server_resp;

    };
}



function push_grid_result(server_resp, additional_callbacks)
{
  //alert(server_resp);
  
  var str_to_display=server_resp;
  
  var tbl_col_str="";
  var tbl_colspan ="";
  var elem_id=additional_callbacks;

  var empty_state_str="";
  
  if(additional_callbacks.indexOf(":") >= 0)
  {
     tbl_col_str=additional_callbacks.split(":");
     
     tbl_colspan=tbl_col_str[1];
     
     elem_id=tbl_col_str[0];

	if(typeof tbl_col_str[2] !== 'undefined') 
    {
     var empty_state_str = tbl_col_str[2];
    }

  }
///alert(additional_callbacks);
  if(server_resp.toString().trim()=='')
  {
  	if(tbl_colspan!="")
    {
      	var str_to_display='<tr class=" no_data_tray_grid" > <td colspan="'+tbl_colspan+'" style="text-align:center;"><div class=" text-wrap col-md-12"><i class="fa fa-search"></i> Sorry. We didn`t find results matching this request.<hr></div> <div class="col-md-12 text-dark text-center cpointer  p-1 rounded mb-3"><i class="fa fa-star"></i> Lets try a new search</div></td> </tr>';
    if(empty_state_str!="")
    {
    var str_to_display =window[empty_state_str];
    
    }
    }else{
        
  	var str_to_display='<div class="row justify-content-center p-2 mb-3 text-center col-md-12 no_data_tray_grid" > <div class=" text-wrap col-md-12"><i class="fa fa-search"></i> Sorry. We didn`t find results matching this request.<hr></div> <div class="col-md-12 text-dark text-center cpointer  p-1 rounded mb-3"><i class="fa fa-star"></i> Lets try a new search</div> </div>';
    
    if(empty_state_str!="")
    {
    var str_to_display =window[empty_state_str];
    
    }
    }
  }
  
  
  if (document.getElementById(elem_id) !==null) {
        
  ///document.getElementById(elem_id).style.display="block";
  document.getElementById(elem_id).innerHTML=str_to_display;
        
    }else{
          
    document.getElementById("result").innerHTML=server_resp;

    };
}

function mosy_empty_state(top_msg="", btm_msg="", tbl_colspan="")
{

    var str_to_display="";

  	if(tbl_colspan!="")
    {
      	var str_to_display='<tr class=" no_data_tray_grid " > <td colspan="'+tbl_colspan+'" style="text-align:center;">'+top_msg+'<hr><div class="col-md-12 text-dark text-center cpointer  p-1 rounded mb-3"> '+btm_msg+'</div></td> </tr>';
 
    }else{
        
  	 str_to_display='<div class="row justify-content-center p-2 mb-3 text-center col-md-12 no_data_tray_grid" > <div class=" text-wrap col-md-12">'+top_msg+'<hr></div> <div class="col-md-12 text-dark text-center cpointer  p-1 rounded mb-3"> '+btm_msg+'</div> </div>';
    
 
    }


///alert(str_to_display);

  return str_to_display;

}


function push_val(arrkeys, arrvalues)
{
    var r = {},i;
    
    for (let i = 0; i < arrkeys.length; i++) {
        r[arrkeys[i]] = arrvalues[i];
      document.getElementById(arrvalues[i]).value=[arrkeys[i]];
    }

}

    function qddata(server_resp,callbacks)
    {
    //alert(server_resp);
    var retjson = JSON.parse(server_resp)[0];
    
        ///alert(retjson.name);


    return retjson;
    
    
    }
function mosy_ajax_post(post_url, json_params, callback_function_string, additional_callbacks)
{

	/////alert(post_url);

	var fcall_back_function = callback_function_string;
    
	var fadditional_callbacks = additional_callbacks;
    
    if(callback_function_string.indexOf(":") >= 0)
    {
         split_fun_str=callback_function_string.split(/:(.*)/s);
         
		 fcall_back_function =  split_fun_str[0];
        
         fadditional_callbacks =  split_fun_str[1] ;
    
    }
    
    if (document.getElementById(fadditional_callbacks) !==null) {
      ////  document.getElementById(fadditional_callbacks).style.display="block";
    	///document.getElementById(fadditional_callbacks).innerHTML='<i class="fa fa-spinner fa-spin"></i> Processing request... '+document.getElementById(fadditional_callbacks).innerHTML;
        
    }
    
       if (document.getElementById("ajax_spinner") !==null) 
       {
            
          document.getElementById("ajax_spinner").style.display="block";
          document.getElementById("ajax_spinner").innerHTML='<i class="fa fa-spinner fa-spin"></i> Processing request... ';

       }else{
       	mosy_snack_wgt("Processing request...", "top", "ajax_snack", "200px", "ajax_snack_id", "#000",  "#fff", "");
    
    	mosytoggle_class("ajax_snack_id", "show");
        
       }
       
       
  	var formData = ((json_params)); //Array 
  
      $.ajax({ 
      url: post_url,
      type: "POST",
      data:formData,

      success: function (data) 
      {
        //alert(data);
       if (document.getElementById("ajax_spinner") !==null) 
       {
       
         var result_response_='<i class="fa fa-info-circle"></i> Request Processed Succesfully.';
		
        	if(data=='')
            {
            
        		var result_response_='<i class="fa fa-info-circle"></i> No data .';
            
            }
            
          document.getElementById("ajax_spinner").style.display="block";
          document.getElementById("ajax_spinner").innerHTML=result_response_;

       } 
       
       push_html("ajax_snack", "");                                          

        window[fcall_back_function](data, fadditional_callbacks);

      }

  })
  
}  


   //Ajax Manager

function mosyajax_create_data(tbl, tbl_cols, tbl_vals, callback_function_string)
{
  ///alert(tbl_cols+" - "+tbl_vals);
  
    var json_params_str={"mosyajax_create":"ok", "tbl_cols":tbl_cols, "tbl_vals":tbl_vals, "tbl":tbl};
    
  	mosy_ajax_post(mosyajax_sql_url, json_params_str, callback_function_string, '');

}

   //Ajax Exe
function mosyajax_update(tbl, update_str, where_str, callback_function_string)
{
  //alert(update_str);
  
    var json_params_str={"mosyajax_update":"ok", "update_str":update_str, "where_str":where_str, "tbl":tbl};
    
  	mosy_ajax_post(mosyajax_sql_url, json_params_str, callback_function_string, '');

}

function mosyajax_drop(tbl, where_str, callback_function_string)
{
  //alert(where_str);
  
    var json_params_str={"mosyajax_drop":"ok", "where_str":where_str, "tbl":tbl};
    
  	mosy_ajax_post(mosyajax_sql_url, json_params_str, callback_function_string, '');

}


function mosyajax_get(getstr, callback_function_string,req_url="")
{
    if(req_url=="")
    {
     req_url=ajax_url;
    }

	var fcall_back_function = callback_function_string;
    
	var fadditional_callbacks = "";
    
    if(callback_function_string.indexOf(":") >= 0)
    {
		var split_call_back = callback_function_string.split(":");
        
		var fcall_back_function = split_call_back[0];
        
        var fadditional_callbacks = split_call_back[1];
    
    }
    
    
    if (document.getElementById("ajax_spinner") !==null) 
    {
        
      document.getElementById("ajax_spinner").innerHTML='<i class="fa fa-check-circle"></i> Request Processed Succesfully. <span class="badge badge-primary btn_neo"><i class="fa fa-thumbs-up"></i> OK </span>';

  	}

    $.ajax({
      url: req_url+"?"+getstr,
      type: 'GET',
      success: function(res) {
       if (document.getElementById("ajax_spinner") !==null) {

          document.getElementById("ajax_spinner").innerHTML='<i class="fa fa-check-circle"></i> Request Processed Succesfully. <span class="badge badge-primary btn_neo"><i class="fa fa-thumbs-up"></i> OK </span>';

       }              
            //alert(res);
        window[fcall_back_function](res, fadditional_callbacks);

          }
      });
}


function mosy_validate_required(required_inp=null, show_dial='yes')
{
	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+"</b><br>";
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
    //alert(validate_req);
    
    if(mosy_qstr(validate_req, "False")=="False")
      {
      
       var required_state="1";
      
      }else{
      
        var required_state="0";
        if(show_dial=='yes')
        {

          magic_message(validate_msg, 'dialog_box');

        }
      }
  
  return required_state ;
}

function mosy_form_data(form_id,  save_action, callback_function_string, additional_callbacks, required_inp="",req_url="")
{

    if(req_url=="")
    {
     req_url=ajax_url;
    }
    
	var fcall_back_function = callback_function_string;
    
	var fadditional_callbacks = additional_callbacks;
    
    if(callback_function_string.indexOf(":") >= 0)
    {
		var split_call_back = callback_function_string.split(":");
        
		var fcall_back_function = split_call_back[0];
        
        var fadditional_callbacks = split_call_back[1];
    
    }
    
    
	var formData = new FormData(document.getElementById(form_id));
  
    if (document.getElementById("ajax_spinner") !==null) {
        
    	document.getElementById("ajax_spinner").innerHTML='<i class="fa fa-spinner fa-spin"></i> Processing request... ';
        
    }
    
	var validate_req="True";
    var validate_msg="Kindly fill out the required fields<br> ";
    
  for(curr_input of required_inp)
    {
          
       if(curr_input.indexOf(":") >= 0)
  	   {
            input_id_explode=curr_input.split(":");
         
   	     validate_req +=magic_validate_required(input_id_explode[1], input_id_explode[0]);
             
         if(document.getElementById(input_id_explode[0]).value=="")
         {
		 	validate_msg+="<b class=validate_error_class> * "+input_id_explode[1]+'</b><br>';
         }
       
       }else{

		validate_req +=magic_validate_required('', curr_input);

       }
    }
    
   ///alert(validate_req);
    
    if(mosy_qstr(validate_req, 'False')=='False')
    {

	formData.append(save_action, "ok");
	formData.append('mosyrequest_type', "ajax");
        $.ajax({
            type: "POST",
            url: req_url,
            data: formData,
            contentType: false,
            cache: false,
            processData:false,
            success: function(data){
                  if (document.getElementById("ajax_spinner") !==null) {
        
                      document.getElementById("ajax_spinner").innerHTML='<i class="fa fa-check-circle"></i> Request Processed Succesfully. <span class="badge badge-primary btn_neo"><i class="fa fa-thumbs-up"></i> OK </span>';

                  }
              ///alert(data);
        		window[fcall_back_function](data, fadditional_callbacks);
            },
	    complete: function(){
			//alert("Data uploaded successfully.");
	    },
	    error: function (jqXHR, textStatus, errorThrown) {
			alert(errorThrown);
	    } 
        });
      // Display the key/value pairs
      for (var pair of formData.entries()) {
          ///console.log(pair[0]+ ", " + pair[1]); 
      }
        	  
     }else{
        magic_message(validate_msg, 'dialog_box');
      }
      
      
}

function blackhole(data)
{

}

function show_password(input_name) 
{
  var x = document.getElementById(input_name);
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}


function get_newval(elemid)
{
    if (document.getElementById(elemid) !==null) {

	  return document.getElementById(elemid).value;
    }else{
  
  return "";
  }
}

function mosy_response(server_resp, callbacks)
{

	alert("server_resp"+server_resp+" -- Callbacks "+callbacks);

}

function get_html(elemid)
{
    if (document.getElementById(elemid) !==null) {

  return document.getElementById(elemid).innerHTML;
  }else{
  
  return "";
  }
}

function get_src(elemid)
{
  if (document.getElementById(elemid) !==null) {

  return document.getElementById(elemid).src;
  }else{
  
  return "";
  }
}

function get_href(elemid)
{
  if (document.getElementById(elemid) !==null) {

  return document.getElementById(elemid).href;
  }else{
  
  return "";
  }
}


function push_ddown(server_items, selelem)
{

	$('#'+selelem+' option:not(:first)').remove();

	document.getElementById(selelem).innerHTML=document.getElementById(selelem).innerHTML+server_items;

}
//========= formart to num =================

function tonum(req_number, decplc=0)
{

///alert(req_number);

n = parseFloat(req_number).toFixed(decplc)
var withCommas = Number(n).toLocaleString('en');


return withCommas;
}

//========= formart to num =================

function mosy_qstr(string, query_str)
{
    
   if(string.indexOf(query_str)==-1)
    {
      
      var q_str_state="False";
      
    }else{
    
	  var q_str_state="True";
     
	}
    
  return q_str_state;
    
}
function mosy_refresh(new_location)
{

var new_location_str=window.location.href;

  window.location=new_location_str.replace("table_alert", "tbl_alert_old");

}

function mosy_srefresh(server_resp, new_location)
{

  window.location=new_location;

}
////////////////// ===================  js action listener ================  

  var _js_msdn=document.querySelectorAll('js_msdn');
  
  _js_msdn.forEach(el => el.addEventListener('click', event => {
  
  var _mosy_jsmsdn_event_trgt= event.currentTarget;

  
	 _mosy_jsmsdn_jsaction="";
	 _mosy_jsmsdn_arg="";
     
  if (!_mosy_jsmsdn_event_trgt.hasAttribute("data-mosy_js")) 
  {
    // data attribute doesnt exist
  }else{
  
	 _mosy_jsmsdn_jsaction=_mosy_jsmsdn_event_trgt.getAttribute("data-mosy_js");
	 _mosy_jsmsdn_arg=_mosy_jsmsdn_event_trgt.getAttribute("data-_mosy_jsmsdn_arg");
     
  }

     window[_mosy_jsmsdn_jsaction](_mosy_jsmsdn_arg);

  
}));
  
  
  
////////////////// ==================  js action listener ================  



function pop_filter_tray (data_src, card_title, where_str_req,cols,returnfun)
{
  magic_screen(pop_data_filter_card, "alert_box");
        
  var where_str =" and "+(where_str_req);
  var where_str_inp =" and "+magic_clean_str(where_str_req);
  
  if(where_str_req=="")
  {
    var where_str="";
    var where_str_inp ="";
  }
  
  var load_data_set ="load_"+data_src;
  var gft_data_str="gft_"+data_src;
  ///alert(where_str);
  window[load_data_set]("", ajaxw+" "+window[gft_data_str]("")+where_str, cols, returnfun, "push_result:result","card");
  
  //alert(cols);
  var textbox ='<input type="text" class="form-control" onkeyup="'+load_data_set+'(this.value, \''+ajaxw+' \'+'+gft_data_str+'(this.value)+\''+where_str_inp+'\', \''+magic_clean_str(cols)+'\', \''+returnfun+'\', \'push_result:result\',\'card\')" placeholder="Type your search here"/>';
        
  document.getElementById('card_title').innerHTML=card_title;
  document.getElementById('dope_text').innerHTML=textbox;

        
}


function mosytoggle_elem(elemid, new_val)
{
  if(new_val=='')
  {
  if(document.getElementById(elemid).style.display!='none')
  {
    document.getElementById(elemid).style.display='none';
  }else{
    document.getElementById(elemid).style.display='block';
  }
  }else{
    document.getElementById(elemid).style.display=new_val;
  }
}

function tray_uptoken(datakey,callbacks)
{
  
  window.location=callbacks[0]+'?'+callbacks[1]+'_uptoken='+btoa(datakey[0]);
}

var pop_data_filter_card=`
    <h5><i class="fa fa-search mr-2"></i><span id="card_title"></span></h5>
	<hr>
  <div class="row justify-content-center m-0 p-0 col-md-12">
  	<div id="dope_text" class="col-md-12"></div>
	<div id="result" class="col-md-12" style="max-height:300px; overflow-y:auto;" onclick="this.style.display='none'"></div>
    
  	<div id="r" class="col-md-12 row justify-content-center m-0 p-0 mt-3">
    	<a href="" class="badge border border_set p-2 rounded text-primary col-md-5 mr-lg-3" id="pop_tray_location"> 
        	View All <i class="fa fa-arrow-right"></i> 
        </a>
    	<a href="" class="badge border border_set p-2 rounded text-primary col-md-5" id="new_pop_tray_location"> 
        	<i class="fa fa-plus" id="newclass"></i> 
        	<span id="new_record_label"> Add new </span> 
        </a>
    </div>
  </div>`;
  
function push_link(new_link,anchor_el)
{

	//alert(new_link);
	document.getElementById(anchor_el).href=new_link;

}


function push_html(elemid, new_val)
{
    if (document.getElementById(elemid) !==null) {

	  document.getElementById(elemid).innerHTML=new_val;
      
      }
}

function push_newval(elemid, new_val)
{
    if (document.getElementById(elemid) !==null) {

  		document.getElementById(elemid).value=new_val;
  
  }
}

function push_src(elemid, new_val)
{
	  if (document.getElementById(elemid) !==null) 
      {

	  		document.getElementById(elemid).src=new_val;
      
      }
}

function mosytoggle_class(elemid, new_class)
{
  if(document.getElementById(elemid).classList.contains(new_class))
  {
    document.getElementById(elemid).classList.remove(new_class);
  }else{
    document.getElementById(elemid).classList.add(new_class);
  }
  
}

function mosytoggle_addclass(elemid, new_class)
{
  if(document.getElementById(elemid).classList.contains(new_class))
  {
    //document.getElementById(elemid).classList.remove(new_class);
  }else{
    document.getElementById(elemid).classList.add(new_class);
  }
  
}

function mosytoggle_remclass(elemid, new_class)
{
  if(document.getElementById(elemid).classList.contains(new_class))
  {
    document.getElementById(elemid).classList.remove(new_class);
  }
  
}


function mosyhide_elem(elemid, new_class="")
{
    var curr_class="none";
    if(new_class!="")
    {
    curr_class=new_class;
    }
    	
   if (document.getElementById(elemid) !==null) 
   {
   	document.getElementById(elemid).style.display=curr_class;
   }
}

function mosyshow_elem(elemid, new_class="")
{
    var curr_class="block";
    if(new_class!="")
    {
    curr_class=new_class;
    }
   if (document.getElementById(elemid) !==null) 
   {
   	document.getElementById(elemid).style.display=curr_class;
   }
}

function mosy_get_param(name){
   if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
      return decodeURIComponent(name[1]);
}




function mosy_push_data_class(class_name,data)
{    
	var elem_state ="false";
    ///alert(class_name);
    
    if (document.getElementsByClassName(class_name)[0] !==null) 
    {
      elem_state="true";

     var slides = document.getElementsByClassName(class_name);
     for (var i = 0; i < slides.length; i++) 
     {
	  var elemid = document.getElementsByClassName(class_name)[i].id;
      

	 console.log(elemid+" state "+ elem_state);
      var elem_type=(document.getElementById(elemid).nodeName).toLowerCase();

      if(elem_type=='span')
      {
        push_html(elemid, data);
      }else if(elem_type=='select')
      {
        ///alert("select found "+elemid+" vals"+get_html(elemid));
      var remove_dup_item=get_html(elemid).replace( "<option>"+data+"</option>","")
       push_html(elemid, "<option>"+data+"</option>"+remove_dup_item);
        

      }else if(elem_type=='img')
      {
        push_src(elemid, data);
      }else if(elem_type=='a')
      {
        push_link(elemid, data);
      }else{
      push_newval(elemid, data);
      push_html(elemid, data);
      }
  
  }
  
  console.log(elemid+" state "+ elem_state);
 }  
}

function mosy_push_data(elemid,data)
{
	var elem_state ="false";
    if (document.getElementById(elemid) !==null) 
    {
      elem_state="true";
      

      var elem_type=(document.getElementById(elemid).nodeName).toLowerCase();

      if(elem_type=='span')
      {
        push_html(elemid, data);
      }else if(elem_type=='select')
      {
        ///alert("select found "+elemid+" vals"+get_html(elemid));
      var remove_dup_item=get_html(elemid).replace( "<option>"+data+"</option>","")
       push_html(elemid, "<option>"+data+"</option>"+remove_dup_item);
        

      }else if(elem_type=='img')
      {
        push_src(elemid, data);
      }else if(elem_type=='a')
      {
        push_link(elemid, data);
      }else{
      push_newval(elemid, data);
      push_html(elemid, data);
      }
  
  }
  
  ///console.log(elemid+" state "+ elem_state);
  
}

function check_elem(elemid)
{
    if (document.getElementById(elemid) ===null) 
    {
    alert("element_"+elemid+" Not available");
    }
}

function push_shtml(server_res, callback)
{
  
  magic_message(callback, "dialog_box");
  
}
function mosy_push_num_ddata(_server_resp, elemid_str)
{
	//alert(_server_resp);
    
	var elem_state ="false";
    var elemid=",,";    
    var json_decoded_str=JSON.parse(_server_resp)[0];
        
    var data_str=elemid_str;
    
    var data = json_decoded_str[data_str];

    if(elemid_str.indexOf("|") >= 0)
    {
		var elemid_arr = elemid_str.split("|");
        
		 elemid = (elemid_arr[0]);
        
          data_str = elemid_arr[1];
          
          console.log(elemid+" state "+ data_str+" serep "+_server_resp);

         data = tonum(json_decoded_str[data_str]);
        
    }
    
    if (document.getElementById(elemid) !==null) 
    {
      elem_state="true";
            
      push_html(elemid, data);
      push_newval(elemid, data);
      var elem_type=(document.getElementById(elemid).nodeName).toLowerCase();

      if(elem_type=='span')
      {
        push_html(elemid, data);
      }
       if(elem_type=='select')
      {
        push_html(elemid, data);
      }

      if(elem_type=='img')
      {
        push_src(elemid, data);
      }
      if(elem_type=='a')
      {
        push_link(elemid, data);
      }
  
  }
  
  ///console.log(elemid+" state "+ elem_state);
  return json_decoded_str;
}

function mosy_push_ddata(_server_resp, elemid_str)
{

///alert(_server_resp);

	var elem_state ="false";
    var elemid=",,";    
    var json_decoded_str=JSON.parse(_server_resp)[0];
        
    var data_str=elemid_str;
    

    if(elemid_str.indexOf("|") >= 0)
    {
		var elemid_arr = elemid_str.split("|");
        
		 elemid = elemid_arr[0];
        
          data_str = elemid_arr[1];
          

         var data = json_decoded_str[data_str];
        
    }else{

		var data = json_decoded_str[data_str];

    }
              
    console.log(elemid+" state "+ data_str+" serep "+_server_resp);

    if (document.getElementById(elemid) !==null) 
    {
      elem_state="true";
      push_html(elemid, data);      
      push_newval(elemid, data);
      var elem_type=(document.getElementById(elemid).nodeName).toLowerCase();

      if(elem_type=='span')
      {
        push_html(elemid, data);
      }
       if(elem_type=='select')
      {
        push_html(elemid, data);
      }

      if(elem_type=='img')
      {
        push_src(elemid, data);
      }
      if(elem_type=='a')
      {
        push_link(elemid, data);
      }
  
  }
  
  ///console.log(elemid+" state "+ elem_state);
  return json_decoded_str;
}

function dope_token(token_url="", token_key="")
{
window.history.replaceState(null, null, "?"+token_url+"="+token_key+"");
}

function mosyrename_elem(elemid, newname)
{
    if (document.getElementById(elemid) !==null) 
    {
      document.getElementById(elemid).id=newname;
      document.getElementById(newname).setAttribute("name",newname);
    }
}
///////////////  slide show 
function mosy_slide_wgt(image_arr_n_captions, img_style, img_class, extra_attr, slide_indicators_yes_no)
{
  
const rem_array = image_arr_n_captions.slice(0, 0).concat(image_arr_n_captions.slice(0+1, image_arr_n_captions.length));
  
var curr_slide_id =magic_random_str(10);
    
var img_string =  image_arr_n_captions[0];
var caption_str = ""
var caption_str_div="";
var datakey = "";
  
if(image_arr_n_captions[0].includes(":"))
{
 img_string =  image_arr_n_captions[0].substring(0, image_arr_n_captions[0].indexOf(':')); 
 datakey_1 = image_arr_n_captions[0].substring(image_arr_n_captions[0].indexOf(':')+1); 
 datakey = datakey_1.substring(0, datakey_1.indexOf(':'));
 datakey_2 = datakey_1.substring(datakey_1.indexOf(':')+1);
 caption_str = datakey_2.substring(datakey_2.indexOf(':'));
 caption_str_div=`<div class="col-md-12 text-center  pb-4"> ${caption_str} </div>`;
}
  ///alert("dkey1 -- "+datakey_2);
 var slide_node="";
 var slidecounter="";
 var i=0;
  
 if(slide_indicators_yes_no=='yes')
 {
   slidecounter=`<li data-target="#slide_s${curr_slide_id}" data-slide-to="0" class="active"></li>`;
 }
 for(img_arr of rem_array)
 {
   i++;
   
	if(slide_indicators_yes_no=='yes'){
 slidecounter+=`
        <li data-target="#slide_s${curr_slide_id}" data-slide-to="${i}" class="active"></li>
   `;  
    }
   
   var loop_img_string =  img_arr;
   var loop_caption_str = "";
   var loop_caption_str_div="";
   var loop_datakey="";
   
   if(img_arr.includes(":")){
 	loop_img_string =  img_arr.substring(0, img_arr.indexOf(':')); 
 	loop_datakey_1 = img_arr.substring(img_arr.indexOf(':')+1); 
 	loop_datakey = loop_datakey_1.substring(0, loop_datakey_1.indexOf(':'));
 	loop_datakey_2 = loop_datakey_1.substring(loop_datakey_1.indexOf(':')+1);
 	loop_caption_str = loop_datakey_2.substring(loop_datakey_2.indexOf(':'));
 	loop_caption_str_div=`<div class="col-md-12 text-center  pb-4"> ${loop_caption_str} </div>`;
   }
   
   slide_node+=`   
            <!-- carousel item -->
            <div class="carousel-item">
             <div class="row pt-3 justify-content-center">
     			${loop_caption_str_div}
               <div  class="col-md-12 pr-0 w-100">
               <img src="${loop_img_string}" style="${img_style}" class="${img_class}" ${extra_attr} data-idkey="${loop_datakey}"/>
               </div>
             </div>
           </div>
           <!-- carousel item -->`;
   
 }
  
var slide_tray=`
      <!--------------- Start carousel ---------->
      <div id="slide_s${curr_slide_id}" class="carousel slide w-100" data-ride="carousel" data-interval="2000">
        <ol class="carousel-indicators mt-2">
  		${slidecounter}
        </ol>
        <!-- carousel inner -->
          <div class="carousel-inner">
            <!-- carousel item -->
            <div class="carousel-item active">
             <div class="row pt-3 justify-content-center">
          	   ${caption_str_div}
               <div  class="col-md-12 pr-0 w-100">
               <img src="${img_string}" style="${img_style}" class="${img_class}" ${extra_attr} data-idkey="${datakey}"/>
               </div>
             </div>
           </div>
           <!-- carousel item -->
		   ${slide_node}
            <!-- carousel inner -->
            <a class="carousel-control-prev" href="#slide_s${curr_slide_id}" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a class="carousel-control-next" href="#slide_s${curr_slide_id}" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </a> 
          </div>
             
      </div>
      <!--------------- End carousel ---------->
        `;
  
return [slide_tray, curr_slide_id];  
}
///////////////  slide show 

//////////////  image alert 
function mosy_img_pop(img_src,img_style, img_class,  extra_attr, slide_show_yes_no)
{
  var img_tray=
    `
    <img src="${img_src}" style="${img_style}" class="${img_class}"/>
    
    `;
  
  if(slide_show_yes_no=='yes')
  {
    
    var pop_tray_carousel = mosy_slide_wgt(img_src, img_style, img_class, extra_attr)[0];
    
    magic_screen(pop_tray_carousel, 'alert_box');
    
  }else{
  	magic_screen(img_tray, 'alert_box');
  }
  
}  

//////////////  image alert \

function mosy_snack_wgt(content, curr_position, push_to, snack_pos, snackid, color, bg, onclick_fun)
{
              
var snack_cont=`
<style>
/* The snackbar - position it at the bottom and in the middle of the screen */
#${snackid} {
  visibility: hidden; /* Hidden by default. Visible on click */
  min-width: 250px; /* Set a default minimum width */
  margin-left: -125px; /* Divide value of min-width by 2 */
  background:${bg}; /* Black background color */
  color: ${color}; /* White text color */
  text-align: center; /* Centered text */
  border-radius: 2px; /* Rounded borders */
  padding: 16px; /* Padding */
  position: fixed; /* Sit on top of the screen */
  z-index: 9999; /* Add a z-index if needed */
  left: 50%; /* Center the snackbar */
  ${curr_position}: ${snack_pos}; /* 30px from the bottom */
}

/* Show the snackbar when clicking on a button (class added with JavaScript) */
#${snackid}.show {
  visibility: visible; /* Show the snackbar */
  /* Add animation: Take 0.5 seconds to fade in and out the snackbar.
  However, delay the fade out process for 2.5 seconds */
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

/* Animations to fade the snackbar in and out */
@-webkit-keyframes fadein {
  from {${curr_position}: 0; opacity: 0;}
  to {${curr_position}: ${snack_pos}; opacity: 1;}
}

@keyframes fadein {
  from {${curr_position}: 0; opacity: 0;}
  to {${curr_position}: ${snack_pos}; opacity: 1;}
}

@-webkit-keyframes fadeout {
  from {${curr_position}: ${snack_pos}; opacity: 1;}
  to {${curr_position}: 0; opacity: 0;}
}

@keyframes fadeout {
  from {${curr_position}: ${snack_pos}; opacity: 1;}
  to {${curr_position}: 0; opacity: 0;}
}
</style>
  
  <div id="${snackid}" onclick="${onclick_fun};push_html('${push_to}', '')">${content}</div>

  `;


push_html(push_to, snack_cont);


} 

function new_location(new_location_str)
{
window.location=new_location_str;
}

function mosy_reload()
{
   document.location.reload()

} 

function glass_modal()
{
       document.getElementsByClassName("msg_modal-content")[0].style.setProperty("background-color", "transparent", "important");;
       document.getElementsByClassName("msg_modal-content")[0].style.setProperty("border-top", "0px solid", "important");;
       document.getElementsByClassName("msg_modal-content")[0].style.setProperty("border", "0px solid", "important");;
}

function mosy_card(card_title="", card_content, attach_To)
{
	var mosy_card_title="";
    if(card_title!="")
    {
    var mosy_card_title=`
                          <!-- Start  Title ribbon-->
                      <h5 class="col-md-12 row p-2 justify-content-center p-0 m-0 ">
                        <div class="col-md-2 bg-dark mb-3 mb-lg-0 mt-lg-3" style="height: 1px"></div>
                        <div class="col-md-8 text-center"><b> ${card_title}</b></div>
                        <div class="col-md-2 bg-dark mt-3" style="height: 1px"></div>
                      </h5>
                      <!-- End Title ribbon--> 
    `;
    }
    var link_pop=`
    <div class="row justify-content-center m-0 p-0 col-md-12">
						${mosy_card_title}
                      <div class="row justify-content-center m-0 p-0 col-md-12 mt-3 mb-3">
                        ${card_content}
                      </div>
      </div>
    </div>

    `;

    if(attach_To=='' || attach_To==undefined)
    {
    magic_screen(link_pop, 'alert_box');
    }else{
      push_html(attach_To, link_pop);
    }

    return link_pop;
 
}

  
function filter_by_date(card_title,filter_link,filter_col,and_query='',trailing_space="")
{

//alert(card_title+"-fl-"+filter_link+"- colstr -"+filter_col+"- and q -"+and_query+"- trsp  -"+trailing_space+"- inptype-"+input_type);
 var def_date = mosy_ymd();

var pop_filter_date=`
    <h5>Filter by <span id="filter_title"> ${card_title} </span></h5>
  <div class="row justify-content-center m-0 p-0 col-md-12">
	<div class="form-group col-md-6">
		<label >Start Date</label>
		<input class="form-control" id="txt_start_date" name="" value="${def_date}" placeholder="Your Name" type="date">
	</div>
  	<div class="form-group col-md-6">
		<label >End Date</label>
		<input class="form-control" id="txt_end_date"  name="" value="${def_date}" placeholder="Your Name" type="date">
	</div>
    <input type="hidden" id="txt_mosy_filter_q" value="${filter_col}" />
    <input type="hidden" id="txt_mosy_and_query" value="${and_query}" />
  <div class="col-md-7 cpointer btn_neoo2 btn-primary text-center" onclick=" go_to_date('${filter_link}', get_newval('txt_start_date'), get_newval('txt_end_date'), get_newval('txt_mosy_filter_q'), get_newval('txt_mosy_and_query'), '${trailing_space}', '')"><i class="fa fa-arrow-right"></i> Proceed </div>
  </div>
  `;
  
  mosy_card('', pop_filter_date);
  
  return pop_filter_date;
  
}

/////=========  mosy filter date 

  
function filter_by_datetime(card_title,filter_link,filter_col,and_query='',trailing_space="",def_inp_date_="")
{

/////alert(card_title+"-fl-"+filter_link+"- colstr -"+filter_col+"- and q -"+and_query+"- trsp  -"+trailing_space+"- def date -"+def_inp_date_);

var pop_filter_date=`
    <h5>Filter by <span id="filter_title"> ${card_title} </span></h5>
  <div class="row justify-content-center m-0 p-0 col-md-12">
	<div class="form-group col-md-6">
		<label >Start Date</label>
		<input class="form-control" id="txt_start_date" name="" value="${def_inp_date_}" placeholder="Your Name" type="datetime-local">
	</div>
  	<div class="form-group col-md-6">
		<label >End Date</label>
		<input class="form-control" id="txt_end_date"  name="" value="${def_inp_date_}" placeholder="Your Name" type="datetime-local">
	</div>
    <input type="hidden" id="txt_mosy_filter_q" value="${filter_col}" />
    <input type="hidden" id="txt_mosy_and_query" value="${and_query}" />
  <div class="col-md-7 cpointer btn_neoo2 btn-primary text-center" onclick=" go_to_date('${filter_link}', get_newval('txt_start_date'), get_newval('txt_end_date'), get_newval('txt_mosy_filter_q'), get_newval('txt_mosy_and_query'), '${trailing_space}', 'datetime')"><i class="fa fa-arrow-right"></i> Proceed </div>
  </div>
  `;
  
  mosy_card('', pop_filter_date);
  
  return pop_filter_date;
  
}
//==========================================

function go_to_date(filter_link, start_date, end_date, filter_col, and_query, trailing_space, input_type="date")
{
  
  if(input_type=="datetime")
  {
  var filter_location=filter_link+"="+btoa(trailing_space+""+filter_col+" >='" +start_date+"' AND "+filter_col+"<='" +end_date+ "' "+and_query+" ");  
  }else{
    var filter_location=filter_link+"="+btoa(trailing_space+"DATE_FORMAT("+filter_col+", '%Y-%m-%d') >='" +start_date+"' AND DATE_FORMAT("+filter_col+", '%Y-%m-%d') <='" +end_date+ "' "+and_query+" ")+"&mosy_start_date="+btoa(start_date)+"&mosy_end_date="+btoa(end_date);  

  }
  
  ///alert(filter_location);
  ///console.log(filter_location);
  window.location=filter_location;
  
}

function mosy_ymd(date='', time='') 
{

 if(date=="")
 {
  var today = new Date();
 }else{
  var today = date;
 }
 
 var curr_date = new Date().toISOString().slice(0, 10);
 
 var curr_time_date = curr_date+" "+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
 
 if(time!="")
 {
  return curr_time_date;
 }else{
 return curr_date;
 }
}


function mosy_modal(modal_content, attach_To="alert_box", parent_id="")
{

  if(attach_To=="")
  {
  	attach_To="alert_box"
  }
  var mosy_modal_tray =`
  <div class="col-md-12 mosy_modal rounded_big p-0 m-0 bg-white shadow  border border_set ">
    <div class="col-md-12 pt-2 text-right"><span class="cpointer "  onclick="push_html('${attach_To}','')"><i class="fa fa-times-circle"></i></span></div>
    <div class="row justify-content-center m-0 p-0 col-md-12" id="${parent_id}">
    	${modal_content}
    </div>
  </div>`;

  ///alert(mosy_modal_tray);

  push_html(attach_To, mosy_modal_tray);

  return mosy_modal_tray;

}


  function mosy_print_elem(print_div,doc_title="", header_layout="",print_footer="") 
  {
  
  		var print_title=`
        <h3 class="col-md-12 p-3">${doc_title}</h3>
        `;
        //Get the HTML of div
        var divElements = header_layout+print_title+document.getElementById(print_div).innerHTML+print_footer;
        //Get the HTML of whole page
        var oldPage = document.body.innerHTML;
        //Reset the pages HTML with divs HTML only
        document.body.innerHTML = 
          `<html><head><title></title>
          <style>
            body{
            background-color:#fff!important;
            }
            .table thead th 
            {
              white-space: nowrap;
              padding: 1px;
              vertical-align: top;
              border-top: 1px solid #dee2e6;
              font-size: 12px;
            }
            .table tbody td 
            {
              white-space: nowrap;
              padding: 1px;
              vertical-align: top;
              border-top: 1px solid #dee2e6;
              font-size: 12px;
            }
            a{
            color:#000;
            }  
			.table_cell_dropdown:hover .table_cell_dropdown-content{display:none}
            tr:hover .table_cell_dropdown-content{display:none}              
           </style>
          </head>
         <body>` + 
          divElements + "</body>";
        //Print Page
        window.print();
        //Restore orignal HTML
        document.body.innerHTML = oldPage;
        mosy_reload();

    }


function mosy_decode_json(json_server_resp, arr_node)
{
  var decode_resp=JSON.parse(json_server_resp);
    
  if(arr_node.indexOf("|") >= 0)
  {
   
   		var elemid_arr = arr_node.split("|");
        
		var elemid = (elemid_arr[1]);
        
        var data_str = elemid_arr[0]; 
    
        mosy_push_data(elemid, decode_resp[data_str]);
        
        var ret_data = decode_resp[data_str];
  }else{
    
	var ret_data = decode_resp[arr_node];
    
  }
  
  return ret_data ;
  ////alert(decode_resp[arr_node]);
}


function mosy_push_sdata(_server_resp, elemid_str)
{

///alert(_server_resp);

	var elem_state ="false";
    var elemid=elemid_str;    

    var data= _server_resp;
  
    if (document.getElementById(elemid) !==null) 
    {
      elem_state="true";
      push_html(elemid, data);      
      push_newval(elemid, data);
      var elem_type=(document.getElementById(elemid).nodeName).toLowerCase();

      if(elem_type=='span')
      {
        push_html(elemid, data);
      }
       if(elem_type=='select')
      {
        push_html(elemid, data);
      }

      if(elem_type=='img')
      {
        push_src(elemid, data);
      }
      if(elem_type=='a')
      {
        push_link(elemid, data);
      }
  
  }
  
  ///console.log(elemid+" state "+ elem_state);
  ////return json_decoded_str;
}

function mosy_pop_window(market_location)
{
  window.open(atob(market_location), "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,width=1300,height=900");
    
}

function mosy_ajax_list(parent_id, label, qfunction, loop_id,height_class="max_height_70vh")
{
    var html_qloc= `
    <div class="row justify-content-center m-0 p-0 col-md-12 ">
    <input type="text" placeholder="${label}"  class="form-control mb-2" id="txt_q_${loop_id}" name="txt_q_${loop_id}" onkeyup="window['${qfunction}'](this.value)"/>
    </div>
    <div class="row justify-content-center m-0 p-0 col-md-12 ${height_class}" id="${loop_id}" style=""></div>`;
  
   mosy_card("", html_qloc,parent_id);
  
   window[qfunction]("")  
}

function mosy_countdown(push_to, count_to="17")
{
    var timeLeft = count_to;
  
    var timerId = setInterval(countdown, 1000);
    
    function countdown() 
    {
      if (timeLeft == -1) {
        
        clearTimeout(timerId);
        
      } else {
        push_html(push_to, timeLeft);
        timeLeft--;
      }
    }
  
  return timerId;

}//<--ncgh-->
