
  
  
////========================= start line_manager inputs widget 



function line_manager_js_ui(card_title="", btn_str="", skip="", push_to="", required_inp="")
{
     
    mosy_card(card_title, line_manager_input_wgt(line_manager_js_input, btn_str, "", skip, required_inp), push_to);

}


//////////////////////=================== line_manager ========================

 var line_manager_js_input=["txt_line_name:Line Name:text:col-md-6","txt_line_length:Line Length:text:col-md-6","txt_remark:Remark:text:col-md-6",];


function line_manager_input_wgt(input_array, button="", title="", skip="", required_inp="")
{

   ////alert(input_array);
	var input_cell="";

 var input_policy={"txt_line_name":"Line Name:text:col-md-6","txt_line_length":"Line Length:text:col-md-6","txt_remark":"Remark:text:col-md-6",};
 if(title!="")
 {
 
  input_cell=`<div class="row justify-content-left m-0 p-0 col-md-12">
                     <!-- Start  Title ribbon-->
                  <div class="col-md-12 row p-2 justify-content-center p-0 m-0 mb-3">
                    <h5 class="col-md-12 text-left"> ${title}</h5>
                    <div class="col-md-12 bg-light" style="height: 1px"></div>
                  </div>
                  <!-- End Title ribbon-->
   `;
 } 
  
  for(text_node of input_array)
  {
    
    var input_arr = text_node.split(":");
    var input_label=input_arr[1];
    var input_id = input_arr[0];
    var input_type = input_arr[2];
    var cell_width = input_arr[3];
    var additional_attr =input_arr[4];
    
    if(required_inp.includes(input_id))
    {
     additional_attr=" required ";
    }    
    
   //// alert(required_inp+" -- "+input_id+" -- "+additional_attr);
    
    var custom_input_label=input_arr[1];
    var custom_input_id = input_arr[0];
    var custom_input_type = input_arr[2];
    var custom_cell_width = input_arr[3];
        
     if(skip.includes(input_id))
     {
     }else{
     
    if((input_id in input_policy)==true)
    {
     input_policy_arr = input_policy[input_id].split(":");
     input_label=input_policy_arr[0];
     input_type=input_policy_arr[1];
     cell_width = input_policy_arr[2];

    }
    
    if(custom_cell_width!==undefined)
    {
    cell_width = custom_cell_width;
    }
    
    if(custom_input_type!==undefined)
    {
    input_type=custom_input_type;
    }
    
    if(custom_input_label!==undefined)
    {
    input_label=custom_input_label;
    }
    
    var label_tag = `<label >${input_label}</label>`;
    input_tag =`                    
            <input class="form-control" id="${input_id}" name="${input_id}"  placeholder="${input_label}" type="${input_type}" ${additional_attr}>`;
    if(input_type=="textarea")
    {
    
    input_tag =`                    
            <textarea class="form-control" id="${input_id}" name="${input_id}"  placeholder="${input_label}"></textarea>`;    
    }
    
    if(input_type=="contenteditable")
    {
    input_tag=`
    <div class="summernote col-md-12 border-bottom border_set" onkeyup="document.getElementById('${input_id}').value=this.innerHTML" style="min-height:100px;max-height:450px; overflow-y:auto;" contenteditable="true" name="div_${input_id}" id="div_${input_id}" placeholder="${input_label}" ></div>
                
  <textarea class="form-contrkol"  name="${input_id}" id="${input_id}" placeholder="${input_label}" style="height:0px;width:0px;"></textarea>
    `;
    }
    if(text_node.indexOf("|")>0)
    {
        var va_input_arr = text_node.split("|");
        
        input_tag=va_input_arr[1];
        label_tag="";
        cell_width=va_input_arr[0];
        
        //alert(input_tag);

    }    
	
    
    
    
      input_cell +=`
                  <div class="form-group ${cell_width} text-left">
                   ${label_tag}
                   ${input_tag}
                  </div>
    
    `;
  }
}
  var btn_arr = button.split(":");
  var button_id =btn_arr[0];
  var button_label = btn_arr[1];
  var button_icon = btn_arr[2];
  var btn_tag="";
  if(button!=""){

    btn_tag = `<button id="${button_id}" name="${button_id}" class="btn btn-primary" > <i class="fa fa-${button_icon}"></i> ${button_label} </button>`;
  }
    input_cell+=`
    <div class="col-md-12 text-center" id="${button_id}_mosy_cont">
    ${btn_tag}
    </div>`;

   input_cell+=`
    </div>`;
  
  return input_cell;
}
  


  
  
////========================= start line_stations inputs widget 



function line_stations_js_ui(card_title="", btn_str="", skip="", push_to="", required_inp="")
{
     
    mosy_card(card_title, line_stations_input_wgt(line_stations_js_input, btn_str, "", skip, required_inp), push_to);

}


//////////////////////=================== line_stations ========================

 var line_stations_js_input=["txt_line_id:Line Id:text:col-md-6","txt_line_name:Line Name:text:col-md-6","txt_line_length:Line Length:text:col-md-6","txt_station_id:Station Id:text:col-md-6","txt_station_name:Station Name:text:col-md-6","txt_station_length:Station Length:text:col-md-6","txt_remark:Remark:text:col-md-6","txt_station_number:Station Number:text:col-md-6",];


function line_stations_input_wgt(input_array, button="", title="", skip="", required_inp="")
{

   ////alert(input_array);
	var input_cell="";

 var input_policy={"txt_line_id":"Line Id:text:col-md-6","txt_line_name":"Line Name:text:col-md-6","txt_line_length":"Line Length:text:col-md-6","txt_station_id":"Station Id:text:col-md-6","txt_station_name":"Station Name:text:col-md-6","txt_station_length":"Station Length:text:col-md-6","txt_remark":"Remark:text:col-md-6","txt_station_number":"Station Number:text:col-md-6",};
 if(title!="")
 {
 
  input_cell=`<div class="row justify-content-left m-0 p-0 col-md-12">
                     <!-- Start  Title ribbon-->
                  <div class="col-md-12 row p-2 justify-content-center p-0 m-0 mb-3">
                    <h5 class="col-md-12 text-left"> ${title}</h5>
                    <div class="col-md-12 bg-light" style="height: 1px"></div>
                  </div>
                  <!-- End Title ribbon-->
   `;
 } 
  
  for(text_node of input_array)
  {
    
    var input_arr = text_node.split(":");
    var input_label=input_arr[1];
    var input_id = input_arr[0];
    var input_type = input_arr[2];
    var cell_width = input_arr[3];
    var additional_attr =input_arr[4];
    
    if(required_inp.includes(input_id))
    {
     additional_attr=" required ";
    }    
    
   //// alert(required_inp+" -- "+input_id+" -- "+additional_attr);
    
    var custom_input_label=input_arr[1];
    var custom_input_id = input_arr[0];
    var custom_input_type = input_arr[2];
    var custom_cell_width = input_arr[3];
        
     if(skip.includes(input_id))
     {
     }else{
     
    if((input_id in input_policy)==true)
    {
     input_policy_arr = input_policy[input_id].split(":");
     input_label=input_policy_arr[0];
     input_type=input_policy_arr[1];
     cell_width = input_policy_arr[2];

    }
    
    if(custom_cell_width!==undefined)
    {
    cell_width = custom_cell_width;
    }
    
    if(custom_input_type!==undefined)
    {
    input_type=custom_input_type;
    }
    
    if(custom_input_label!==undefined)
    {
    input_label=custom_input_label;
    }
    
    var label_tag = `<label >${input_label}</label>`;
    input_tag =`                    
            <input class="form-control" id="${input_id}" name="${input_id}"  placeholder="${input_label}" type="${input_type}" ${additional_attr}>`;
    if(input_type=="textarea")
    {
    
    input_tag =`                    
            <textarea class="form-control" id="${input_id}" name="${input_id}"  placeholder="${input_label}"></textarea>`;    
    }
    
    if(input_type=="contenteditable")
    {
    input_tag=`
    <div class="summernote col-md-12 border-bottom border_set" onkeyup="document.getElementById('${input_id}').value=this.innerHTML" style="min-height:100px;max-height:450px; overflow-y:auto;" contenteditable="true" name="div_${input_id}" id="div_${input_id}" placeholder="${input_label}" ></div>
                
  <textarea class="form-contrkol"  name="${input_id}" id="${input_id}" placeholder="${input_label}" style="height:0px;width:0px;"></textarea>
    `;
    }
    if(text_node.indexOf("|")>0)
    {
        var va_input_arr = text_node.split("|");
        
        input_tag=va_input_arr[1];
        label_tag="";
        cell_width=va_input_arr[0];
        
        //alert(input_tag);

    }    
	
    
    
    
      input_cell +=`
                  <div class="form-group ${cell_width} text-left">
                   ${label_tag}
                   ${input_tag}
                  </div>
    
    `;
  }
}
  var btn_arr = button.split(":");
  var button_id =btn_arr[0];
  var button_label = btn_arr[1];
  var button_icon = btn_arr[2];
  var btn_tag="";
  if(button!=""){

    btn_tag = `<button id="${button_id}" name="${button_id}" class="btn btn-primary" > <i class="fa fa-${button_icon}"></i> ${button_label} </button>`;
  }
    input_cell+=`
    <div class="col-md-12 text-center" id="${button_id}_mosy_cont">
    ${btn_tag}
    </div>`;

   input_cell+=`
    </div>`;
  
  return input_cell;
}
  


  
  
////========================= start mosy_sql_roll_back inputs widget 



function mosy_sql_roll_back_js_ui(card_title="", btn_str="", skip="", push_to="", required_inp="")
{
     
    mosy_card(card_title, mosy_sql_roll_back_input_wgt(mosy_sql_roll_back_js_input, btn_str, "", skip, required_inp), push_to);

}


//////////////////////=================== mosy_sql_roll_back ========================

 var mosy_sql_roll_back_js_input=["txt_table_name:Table Name:text:col-md-6","txt_roll_type:Roll Type:text:col-md-6","txt_where_str:Where Str:text:col-md-6","txt_roll_timestamp:Roll Timestamp:text:col-md-6","txt_value_entries:Value Entries:text:col-md-6",];


function mosy_sql_roll_back_input_wgt(input_array, button="", title="", skip="", required_inp="")
{

   ////alert(input_array);
	var input_cell="";

 var input_policy={"txt_table_name":"Table Name:text:col-md-6","txt_roll_type":"Roll Type:text:col-md-6","txt_where_str":"Where Str:text:col-md-6","txt_roll_timestamp":"Roll Timestamp:text:col-md-6","txt_value_entries":"Value Entries:text:col-md-6",};
 if(title!="")
 {
 
  input_cell=`<div class="row justify-content-left m-0 p-0 col-md-12">
                     <!-- Start  Title ribbon-->
                  <div class="col-md-12 row p-2 justify-content-center p-0 m-0 mb-3">
                    <h5 class="col-md-12 text-left"> ${title}</h5>
                    <div class="col-md-12 bg-light" style="height: 1px"></div>
                  </div>
                  <!-- End Title ribbon-->
   `;
 } 
  
  for(text_node of input_array)
  {
    
    var input_arr = text_node.split(":");
    var input_label=input_arr[1];
    var input_id = input_arr[0];
    var input_type = input_arr[2];
    var cell_width = input_arr[3];
    var additional_attr =input_arr[4];
    
    if(required_inp.includes(input_id))
    {
     additional_attr=" required ";
    }    
    
   //// alert(required_inp+" -- "+input_id+" -- "+additional_attr);
    
    var custom_input_label=input_arr[1];
    var custom_input_id = input_arr[0];
    var custom_input_type = input_arr[2];
    var custom_cell_width = input_arr[3];
        
     if(skip.includes(input_id))
     {
     }else{
     
    if((input_id in input_policy)==true)
    {
     input_policy_arr = input_policy[input_id].split(":");
     input_label=input_policy_arr[0];
     input_type=input_policy_arr[1];
     cell_width = input_policy_arr[2];

    }
    
    if(custom_cell_width!==undefined)
    {
    cell_width = custom_cell_width;
    }
    
    if(custom_input_type!==undefined)
    {
    input_type=custom_input_type;
    }
    
    if(custom_input_label!==undefined)
    {
    input_label=custom_input_label;
    }
    
    var label_tag = `<label >${input_label}</label>`;
    input_tag =`                    
            <input class="form-control" id="${input_id}" name="${input_id}"  placeholder="${input_label}" type="${input_type}" ${additional_attr}>`;
    if(input_type=="textarea")
    {
    
    input_tag =`                    
            <textarea class="form-control" id="${input_id}" name="${input_id}"  placeholder="${input_label}"></textarea>`;    
    }
    
    if(input_type=="contenteditable")
    {
    input_tag=`
    <div class="summernote col-md-12 border-bottom border_set" onkeyup="document.getElementById('${input_id}').value=this.innerHTML" style="min-height:100px;max-height:450px; overflow-y:auto;" contenteditable="true" name="div_${input_id}" id="div_${input_id}" placeholder="${input_label}" ></div>
                
  <textarea class="form-contrkol"  name="${input_id}" id="${input_id}" placeholder="${input_label}" style="height:0px;width:0px;"></textarea>
    `;
    }
    if(text_node.indexOf("|")>0)
    {
        var va_input_arr = text_node.split("|");
        
        input_tag=va_input_arr[1];
        label_tag="";
        cell_width=va_input_arr[0];
        
        //alert(input_tag);

    }    
	
    
    
    
      input_cell +=`
                  <div class="form-group ${cell_width} text-left">
                   ${label_tag}
                   ${input_tag}
                  </div>
    
    `;
  }
}
  var btn_arr = button.split(":");
  var button_id =btn_arr[0];
  var button_label = btn_arr[1];
  var button_icon = btn_arr[2];
  var btn_tag="";
  if(button!=""){

    btn_tag = `<button id="${button_id}" name="${button_id}" class="btn btn-primary" > <i class="fa fa-${button_icon}"></i> ${button_label} </button>`;
  }
    input_cell+=`
    <div class="col-md-12 text-center" id="${button_id}_mosy_cont">
    ${btn_tag}
    </div>`;

   input_cell+=`
    </div>`;
  
  return input_cell;
}
  


  
  
////========================= start notification_manifest_ inputs widget 



function notification_manifest__js_ui(card_title="", btn_str="", skip="", push_to="", required_inp="")
{
     
    mosy_card(card_title, notification_manifest__input_wgt(notification_manifest__js_input, btn_str, "", skip, required_inp), push_to);

}


//////////////////////=================== notification_manifest_ ========================

 var notification_manifest__js_input=["txt_notification_type:Notification Type:text:col-md-6","txt_notification_state:Notification State:text:col-md-6","txt_notification_icon:Notification Icon:text:col-md-6","txt_notification_title:Notification Title:text:col-md-6","txt_notification_link:Notification Link:text:col-md-6","txt_notification_read_state:Notification Read State:text:col-md-6","txt_site_id:Site Id:text:col-md-6","txt_notification_time_stamp:Notification Time Stamp:text:col-md-6","txt_notif_remark:Notif Remark:text:col-md-6",];


function notification_manifest__input_wgt(input_array, button="", title="", skip="", required_inp="")
{

   ////alert(input_array);
	var input_cell="";

 var input_policy={"txt_notification_type":"Notification Type:text:col-md-6","txt_notification_state":"Notification State:text:col-md-6","txt_notification_icon":"Notification Icon:text:col-md-6","txt_notification_title":"Notification Title:text:col-md-6","txt_notification_link":"Notification Link:text:col-md-6","txt_notification_read_state":"Notification Read State:text:col-md-6","txt_site_id":"Site Id:text:col-md-6","txt_notification_time_stamp":"Notification Time Stamp:text:col-md-6","txt_notif_remark":"Notif Remark:text:col-md-6",};
 if(title!="")
 {
 
  input_cell=`<div class="row justify-content-left m-0 p-0 col-md-12">
                     <!-- Start  Title ribbon-->
                  <div class="col-md-12 row p-2 justify-content-center p-0 m-0 mb-3">
                    <h5 class="col-md-12 text-left"> ${title}</h5>
                    <div class="col-md-12 bg-light" style="height: 1px"></div>
                  </div>
                  <!-- End Title ribbon-->
   `;
 } 
  
  for(text_node of input_array)
  {
    
    var input_arr = text_node.split(":");
    var input_label=input_arr[1];
    var input_id = input_arr[0];
    var input_type = input_arr[2];
    var cell_width = input_arr[3];
    var additional_attr =input_arr[4];
    
    if(required_inp.includes(input_id))
    {
     additional_attr=" required ";
    }    
    
   //// alert(required_inp+" -- "+input_id+" -- "+additional_attr);
    
    var custom_input_label=input_arr[1];
    var custom_input_id = input_arr[0];
    var custom_input_type = input_arr[2];
    var custom_cell_width = input_arr[3];
        
     if(skip.includes(input_id))
     {
     }else{
     
    if((input_id in input_policy)==true)
    {
     input_policy_arr = input_policy[input_id].split(":");
     input_label=input_policy_arr[0];
     input_type=input_policy_arr[1];
     cell_width = input_policy_arr[2];

    }
    
    if(custom_cell_width!==undefined)
    {
    cell_width = custom_cell_width;
    }
    
    if(custom_input_type!==undefined)
    {
    input_type=custom_input_type;
    }
    
    if(custom_input_label!==undefined)
    {
    input_label=custom_input_label;
    }
    
    var label_tag = `<label >${input_label}</label>`;
    input_tag =`                    
            <input class="form-control" id="${input_id}" name="${input_id}"  placeholder="${input_label}" type="${input_type}" ${additional_attr}>`;
    if(input_type=="textarea")
    {
    
    input_tag =`                    
            <textarea class="form-control" id="${input_id}" name="${input_id}"  placeholder="${input_label}"></textarea>`;    
    }
    
    if(input_type=="contenteditable")
    {
    input_tag=`
    <div class="summernote col-md-12 border-bottom border_set" onkeyup="document.getElementById('${input_id}').value=this.innerHTML" style="min-height:100px;max-height:450px; overflow-y:auto;" contenteditable="true" name="div_${input_id}" id="div_${input_id}" placeholder="${input_label}" ></div>
                
  <textarea class="form-contrkol"  name="${input_id}" id="${input_id}" placeholder="${input_label}" style="height:0px;width:0px;"></textarea>
    `;
    }
    if(text_node.indexOf("|")>0)
    {
        var va_input_arr = text_node.split("|");
        
        input_tag=va_input_arr[1];
        label_tag="";
        cell_width=va_input_arr[0];
        
        //alert(input_tag);

    }    
	
    
    
    
      input_cell +=`
                  <div class="form-group ${cell_width} text-left">
                   ${label_tag}
                   ${input_tag}
                  </div>
    
    `;
  }
}
  var btn_arr = button.split(":");
  var button_id =btn_arr[0];
  var button_label = btn_arr[1];
  var button_icon = btn_arr[2];
  var btn_tag="";
  if(button!=""){

    btn_tag = `<button id="${button_id}" name="${button_id}" class="btn btn-primary" > <i class="fa fa-${button_icon}"></i> ${button_label} </button>`;
  }
    input_cell+=`
    <div class="col-md-12 text-center" id="${button_id}_mosy_cont">
    ${btn_tag}
    </div>`;

   input_cell+=`
    </div>`;
  
  return input_cell;
}
  


  
  
////========================= start requests inputs widget 



function requests_js_ui(card_title="", btn_str="", skip="", push_to="", required_inp="")
{
     
    mosy_card(card_title, requests_input_wgt(requests_js_input, btn_str, "", skip, required_inp), push_to);

}


//////////////////////=================== requests ========================

 var requests_js_input=["txt_locomotive:Locomotive:text:col-md-6","txt_tail:Tail:text:col-md-6","txt_train:Train:text:col-md-6","txt_status:Status:text:col-md-6","txt_tryin_hour:Tryin Hour:text:col-md-6","txt_tryin_min:Tryin Min:text:col-md-6","txt_denial_reason:Denial Reason:text:col-md-6","txt_direction:Direction:text:col-md-6","txt_destination_station_id:Destination Station Id:text:col-md-6","txt_origin_station_id:Origin Station Id:text:col-md-6","txt_added_by:Added By:text:col-md-6","txt_date_added:Date Added:text:col-md-6","txt_deleted:Deleted:text:col-md-6","txt_modified_by:Modified By:text:col-md-6","txt_exit_status:Exit Status:text:col-md-6","txt_current_station:Current Station:text:col-md-6",];


function requests_input_wgt(input_array, button="", title="", skip="", required_inp="")
{

   ////alert(input_array);
	var input_cell="";

 var input_policy={"txt_locomotive":"Locomotive:text:col-md-6","txt_tail":"Tail:text:col-md-6","txt_train":"Train:text:col-md-6","txt_status":"Status:text:col-md-6","txt_tryin_hour":"Tryin Hour:text:col-md-6","txt_tryin_min":"Tryin Min:text:col-md-6","txt_denial_reason":"Denial Reason:text:col-md-6","txt_direction":"Direction:text:col-md-6","txt_destination_station_id":"Destination Station Id:text:col-md-6","txt_origin_station_id":"Origin Station Id:text:col-md-6","txt_added_by":"Added By:text:col-md-6","txt_date_added":"Date Added:text:col-md-6","txt_deleted":"Deleted:text:col-md-6","txt_modified_by":"Modified By:text:col-md-6","txt_exit_status":"Exit Status:text:col-md-6","txt_current_station":"Current Station:text:col-md-6",};
 if(title!="")
 {
 
  input_cell=`<div class="row justify-content-left m-0 p-0 col-md-12">
                     <!-- Start  Title ribbon-->
                  <div class="col-md-12 row p-2 justify-content-center p-0 m-0 mb-3">
                    <h5 class="col-md-12 text-left"> ${title}</h5>
                    <div class="col-md-12 bg-light" style="height: 1px"></div>
                  </div>
                  <!-- End Title ribbon-->
   `;
 } 
  
  for(text_node of input_array)
  {
    
    var input_arr = text_node.split(":");
    var input_label=input_arr[1];
    var input_id = input_arr[0];
    var input_type = input_arr[2];
    var cell_width = input_arr[3];
    var additional_attr =input_arr[4];
    
    if(required_inp.includes(input_id))
    {
     additional_attr=" required ";
    }    
    
   //// alert(required_inp+" -- "+input_id+" -- "+additional_attr);
    
    var custom_input_label=input_arr[1];
    var custom_input_id = input_arr[0];
    var custom_input_type = input_arr[2];
    var custom_cell_width = input_arr[3];
        
     if(skip.includes(input_id))
     {
     }else{
     
    if((input_id in input_policy)==true)
    {
     input_policy_arr = input_policy[input_id].split(":");
     input_label=input_policy_arr[0];
     input_type=input_policy_arr[1];
     cell_width = input_policy_arr[2];

    }
    
    if(custom_cell_width!==undefined)
    {
    cell_width = custom_cell_width;
    }
    
    if(custom_input_type!==undefined)
    {
    input_type=custom_input_type;
    }
    
    if(custom_input_label!==undefined)
    {
    input_label=custom_input_label;
    }
    
    var label_tag = `<label >${input_label}</label>`;
    input_tag =`                    
            <input class="form-control" id="${input_id}" name="${input_id}"  placeholder="${input_label}" type="${input_type}" ${additional_attr}>`;
    if(input_type=="textarea")
    {
    
    input_tag =`                    
            <textarea class="form-control" id="${input_id}" name="${input_id}"  placeholder="${input_label}"></textarea>`;    
    }
    
    if(input_type=="contenteditable")
    {
    input_tag=`
    <div class="summernote col-md-12 border-bottom border_set" onkeyup="document.getElementById('${input_id}').value=this.innerHTML" style="min-height:100px;max-height:450px; overflow-y:auto;" contenteditable="true" name="div_${input_id}" id="div_${input_id}" placeholder="${input_label}" ></div>
                
  <textarea class="form-contrkol"  name="${input_id}" id="${input_id}" placeholder="${input_label}" style="height:0px;width:0px;"></textarea>
    `;
    }
    if(text_node.indexOf("|")>0)
    {
        var va_input_arr = text_node.split("|");
        
        input_tag=va_input_arr[1];
        label_tag="";
        cell_width=va_input_arr[0];
        
        //alert(input_tag);

    }    
	
    
    
    
      input_cell +=`
                  <div class="form-group ${cell_width} text-left">
                   ${label_tag}
                   ${input_tag}
                  </div>
    
    `;
  }
}
  var btn_arr = button.split(":");
  var button_id =btn_arr[0];
  var button_label = btn_arr[1];
  var button_icon = btn_arr[2];
  var btn_tag="";
  if(button!=""){

    btn_tag = `<button id="${button_id}" name="${button_id}" class="btn btn-primary" > <i class="fa fa-${button_icon}"></i> ${button_label} </button>`;
  }
    input_cell+=`
    <div class="col-md-12 text-center" id="${button_id}_mosy_cont">
    ${btn_tag}
    </div>`;

   input_cell+=`
    </div>`;
  
  return input_cell;
}
  


  
  
////========================= start stations inputs widget 



function stations_js_ui(card_title="", btn_str="", skip="", push_to="", required_inp="")
{
     
    mosy_card(card_title, stations_input_wgt(stations_js_input, btn_str, "", skip, required_inp), push_to);

}


//////////////////////=================== stations ========================

 var stations_js_input=["txt_station_name:Station Name:text:col-md-6","txt_station_code:Station Code:text:col-md-6","txt_station_type:Station Type:text:col-md-6","txt_station_length:Station Length:text:col-md-6","txt_geofence:Geofence:text:col-md-6","txt_remark:Remark:text:col-md-6","txt_station_location:Station Location:text:col-md-6","txt_loop_line_position:Loop Line Position:text:col-md-6","txt_speed_limit:Speed Limit:text:col-md-6","txt_station_number:Station Number:text:col-md-6",];


function stations_input_wgt(input_array, button="", title="", skip="", required_inp="")
{

   ////alert(input_array);
	var input_cell="";

 var input_policy={"txt_station_name":"Station Name:text:col-md-6","txt_station_code":"Station Code:text:col-md-6","txt_station_type":"Station Type:text:col-md-6","txt_station_length":"Station Length:text:col-md-6","txt_geofence":"Geofence:text:col-md-6","txt_remark":"Remark:text:col-md-6","txt_station_location":"Station Location:text:col-md-6","txt_loop_line_position":"Loop Line Position:text:col-md-6","txt_speed_limit":"Speed Limit:text:col-md-6","txt_station_number":"Station Number:text:col-md-6",};
 if(title!="")
 {
 
  input_cell=`<div class="row justify-content-left m-0 p-0 col-md-12">
                     <!-- Start  Title ribbon-->
                  <div class="col-md-12 row p-2 justify-content-center p-0 m-0 mb-3">
                    <h5 class="col-md-12 text-left"> ${title}</h5>
                    <div class="col-md-12 bg-light" style="height: 1px"></div>
                  </div>
                  <!-- End Title ribbon-->
   `;
 } 
  
  for(text_node of input_array)
  {
    
    var input_arr = text_node.split(":");
    var input_label=input_arr[1];
    var input_id = input_arr[0];
    var input_type = input_arr[2];
    var cell_width = input_arr[3];
    var additional_attr =input_arr[4];
    
    if(required_inp.includes(input_id))
    {
     additional_attr=" required ";
    }    
    
   //// alert(required_inp+" -- "+input_id+" -- "+additional_attr);
    
    var custom_input_label=input_arr[1];
    var custom_input_id = input_arr[0];
    var custom_input_type = input_arr[2];
    var custom_cell_width = input_arr[3];
        
     if(skip.includes(input_id))
     {
     }else{
     
    if((input_id in input_policy)==true)
    {
     input_policy_arr = input_policy[input_id].split(":");
     input_label=input_policy_arr[0];
     input_type=input_policy_arr[1];
     cell_width = input_policy_arr[2];

    }
    
    if(custom_cell_width!==undefined)
    {
    cell_width = custom_cell_width;
    }
    
    if(custom_input_type!==undefined)
    {
    input_type=custom_input_type;
    }
    
    if(custom_input_label!==undefined)
    {
    input_label=custom_input_label;
    }
    
    var label_tag = `<label >${input_label}</label>`;
    input_tag =`                    
            <input class="form-control" id="${input_id}" name="${input_id}"  placeholder="${input_label}" type="${input_type}" ${additional_attr}>`;
    if(input_type=="textarea")
    {
    
    input_tag =`                    
            <textarea class="form-control" id="${input_id}" name="${input_id}"  placeholder="${input_label}"></textarea>`;    
    }
    
    if(input_type=="contenteditable")
    {
    input_tag=`
    <div class="summernote col-md-12 border-bottom border_set" onkeyup="document.getElementById('${input_id}').value=this.innerHTML" style="min-height:100px;max-height:450px; overflow-y:auto;" contenteditable="true" name="div_${input_id}" id="div_${input_id}" placeholder="${input_label}" ></div>
                
  <textarea class="form-contrkol"  name="${input_id}" id="${input_id}" placeholder="${input_label}" style="height:0px;width:0px;"></textarea>
    `;
    }
    if(text_node.indexOf("|")>0)
    {
        var va_input_arr = text_node.split("|");
        
        input_tag=va_input_arr[1];
        label_tag="";
        cell_width=va_input_arr[0];
        
        //alert(input_tag);

    }    
	
    
    
    
      input_cell +=`
                  <div class="form-group ${cell_width} text-left">
                   ${label_tag}
                   ${input_tag}
                  </div>
    
    `;
  }
}
  var btn_arr = button.split(":");
  var button_id =btn_arr[0];
  var button_label = btn_arr[1];
  var button_icon = btn_arr[2];
  var btn_tag="";
  if(button!=""){

    btn_tag = `<button id="${button_id}" name="${button_id}" class="btn btn-primary" > <i class="fa fa-${button_icon}"></i> ${button_label} </button>`;
  }
    input_cell+=`
    <div class="col-md-12 text-center" id="${button_id}_mosy_cont">
    ${btn_tag}
    </div>`;

   input_cell+=`
    </div>`;
  
  return input_cell;
}
  


  
  
////========================= start users inputs widget 



function users_js_ui(card_title="", btn_str="", skip="", push_to="", required_inp="")
{
     
    mosy_card(card_title, users_input_wgt(users_js_input, btn_str, "", skip, required_inp), push_to);

}


//////////////////////=================== users ========================

 var users_js_input=["txt_name:Name:text:col-md-6","txt_email:Email:text:col-md-6","txt_tel:Tel:text:col-md-6","txt_login_password:Login Password:password:col-md-6","txt_ref_id:Ref Id:text:col-md-6","txt_regdate:Regdate:datetime-local:col-md-6","txt_user_no:User No:text:col-md-6","txt_users_user_pic:User Pic:file:col-md-6","txt_user_gender:User Gender:user_gender_static_drop_down:col-md-6","txt_last_seen:Last Seen:text:col-md-6","txt_about:About:text:col-md-6",];


function users_input_wgt(input_array, button="", title="", skip="", required_inp="")
{

   ////alert(input_array);
	var input_cell="";

 var input_policy={"txt_name":"Name:text:col-md-6","txt_email":"Email:text:col-md-6","txt_tel":"Tel:text:col-md-6","txt_login_password":"Login Password:password:col-md-6","txt_ref_id":"Ref Id:text:col-md-6","txt_regdate":"Regdate:datetime-local:col-md-6","txt_user_no":"User No:text:col-md-6","txt_users_user_pic":"User Pic:file:col-md-6","txt_user_gender":"User Gender:user_gender_static_drop_down:col-md-6","txt_last_seen":"Last Seen:text:col-md-6","txt_about":"About:text:col-md-6",};
 if(title!="")
 {
 
  input_cell=`<div class="row justify-content-left m-0 p-0 col-md-12">
                     <!-- Start  Title ribbon-->
                  <div class="col-md-12 row p-2 justify-content-center p-0 m-0 mb-3">
                    <h5 class="col-md-12 text-left"> ${title}</h5>
                    <div class="col-md-12 bg-light" style="height: 1px"></div>
                  </div>
                  <!-- End Title ribbon-->
   `;
 } 
  
  for(text_node of input_array)
  {
    
    var input_arr = text_node.split(":");
    var input_label=input_arr[1];
    var input_id = input_arr[0];
    var input_type = input_arr[2];
    var cell_width = input_arr[3];
    var additional_attr =input_arr[4];
    
    if(required_inp.includes(input_id))
    {
     additional_attr=" required ";
    }    
    
   //// alert(required_inp+" -- "+input_id+" -- "+additional_attr);
    
    var custom_input_label=input_arr[1];
    var custom_input_id = input_arr[0];
    var custom_input_type = input_arr[2];
    var custom_cell_width = input_arr[3];
        
     if(skip.includes(input_id))
     {
     }else{
     
    if((input_id in input_policy)==true)
    {
     input_policy_arr = input_policy[input_id].split(":");
     input_label=input_policy_arr[0];
     input_type=input_policy_arr[1];
     cell_width = input_policy_arr[2];

    }
    
    if(custom_cell_width!==undefined)
    {
    cell_width = custom_cell_width;
    }
    
    if(custom_input_type!==undefined)
    {
    input_type=custom_input_type;
    }
    
    if(custom_input_label!==undefined)
    {
    input_label=custom_input_label;
    }
    
    var label_tag = `<label >${input_label}</label>`;
    input_tag =`                    
            <input class="form-control" id="${input_id}" name="${input_id}"  placeholder="${input_label}" type="${input_type}" ${additional_attr}>`;
    if(input_type=="textarea")
    {
    
    input_tag =`                    
            <textarea class="form-control" id="${input_id}" name="${input_id}"  placeholder="${input_label}"></textarea>`;    
    }
    
    if(input_type=="contenteditable")
    {
    input_tag=`
    <div class="summernote col-md-12 border-bottom border_set" onkeyup="document.getElementById('${input_id}').value=this.innerHTML" style="min-height:100px;max-height:450px; overflow-y:auto;" contenteditable="true" name="div_${input_id}" id="div_${input_id}" placeholder="${input_label}" ></div>
                
  <textarea class="form-contrkol"  name="${input_id}" id="${input_id}" placeholder="${input_label}" style="height:0px;width:0px;"></textarea>
    `;
    }
    if(text_node.indexOf("|")>0)
    {
        var va_input_arr = text_node.split("|");
        
        input_tag=va_input_arr[1];
        label_tag="";
        cell_width=va_input_arr[0];
        
        //alert(input_tag);

    }    
	
    
           

                
				if(input_type=="user_gender_static_drop_down")
                  {
                input_tag=`
                   <select name="txt_user_gender" id="txt_user_gender" class="form-control">
                   <option>Male</option>
<option>Female</option>

                   </select>`;
                   }
           
    
    
      input_cell +=`
                  <div class="form-group ${cell_width} text-left">
                   ${label_tag}
                   ${input_tag}
                  </div>
    
    `;
  }
}
  var btn_arr = button.split(":");
  var button_id =btn_arr[0];
  var button_label = btn_arr[1];
  var button_icon = btn_arr[2];
  var btn_tag="";
  if(button!=""){

    btn_tag = `<button id="${button_id}" name="${button_id}" class="btn btn-primary" > <i class="fa fa-${button_icon}"></i> ${button_label} </button>`;
  }
    input_cell+=`
    <div class="col-md-12 text-center" id="${button_id}_mosy_cont">
    ${btn_tag}
    </div>`;

   input_cell+=`
    </div>`;
  
  return input_cell;
}
  
              function load_users_user_gender_items ()
              {
                var default_user_gender_static_drop_down_val = `                      
                <option >User Gender</option>`;
                
                var static_user_gender_drop_down_items=`<option>Male</option>
<option>Female</option>
`;
           push_html("txt_user_gender", default_user_gender_static_drop_down_val+static_user_gender_drop_down_items);
           }


 var line_manager_list_cols ="primkey:Primkey,line_id:Line Id,line_name:Line Name,line_length:Line Length,remark:Remark";

 var line_stations_list_cols ="primkey:Primkey,line_key:Line Key,line_id:Line Id,line_name:Line Name,line_length:Line Length,station_id:Station Id,station_name:Station Name,station_length:Station Length,remark:Remark,station_number:Station Number";

 var mosy_sql_roll_back_list_cols ="primkey:Primkey,roll_bk_key:Roll Bk Key,table_name:Table Name,roll_type:Roll Type,where_str:Where Str,roll_timestamp:Roll Timestamp,value_entries:Value Entries";

 var notification_manifest__list_cols ="primkey:Primkey,notific_key:Notific Key,notification_type:Notification Type,notification_state:Notification State,notification_icon:Notification Icon,notification_title:Notification Title,notification_link:Notification Link,notification_read_state:Notification Read State,site_id:Site Id,notification_time_stamp:Notification Time Stamp,notif_remark:Notif Remark";

 var requests_list_cols ="primkey:Primkey,request_id:Request Id,locomotive:Locomotive,tail:Tail,train:Train,status:Status,tryin_hour:Tryin Hour,tryin_min:Tryin Min,denial_reason:Denial Reason,direction:Direction,destination_station_id:Destination Station Id,origin_station_id:Origin Station Id,added_by:Added By,date_added:Date Added,deleted:Deleted,modified_by:Modified By,exit_status:Exit Status,current_station:Current Station";

 var stations_list_cols ="primkey:Primkey,station_id:Station Id,station_name:Station Name,station_code:Station Code,station_type:Station Type,station_length:Station Length,geofence:Geofence,remark:Remark,station_location:Station Location,loop_line_position:Loop Line Position,speed_limit:Speed Limit,station_number:Station Number";

 var users_list_cols ="primkey:Primkey,user_id:User Id,name:Name,email:Email,tel:Tel,login_password:Login Password,ref_id:Ref Id,regdate:Regdate,user_no:User No,user_pic:User Pic,user_gender:User Gender,last_seen:Last Seen,about:About";



 var line_manager_list_nodes=`<tr class="cpointer" onclick="mosy_card('Line Manager Profile ', line_manager_input_wgt(line_manager_js_input,'line_manager_update_btn:Update:check-circle',''), '');initialize_line_manager(&quot where primkey='{{primkey}}'&quot;);push_newval('line_manager_uptoken', btoa({{primkey}}))"><td></td>

<td scope="col">{{line_name}}</td>
<td scope="col">{{line_length}}</td>
<td scope="col">{{remark}}</td>
</tr>`;


 var line_stations_list_nodes=`<tr class="cpointer" onclick="mosy_card('Line Stations Profile ', line_stations_input_wgt(line_stations_js_input,'line_stations_update_btn:Update:check-circle',''), '');initialize_line_stations(&quot where primkey='{{primkey}}'&quot;);push_newval('line_stations_uptoken', btoa({{primkey}}))"><td></td>

<td scope="col">{{line_id}}</td>
<td scope="col">{{line_name}}</td>
<td scope="col">{{line_length}}</td>
<td scope="col">{{station_id}}</td>
<td scope="col">{{station_name}}</td>
<td scope="col">{{station_length}}</td>
<td scope="col">{{remark}}</td>
<td scope="col">{{station_number}}</td>
</tr>`;


 var mosy_sql_roll_back_list_nodes=`<tr class="cpointer" onclick="mosy_card('Mosy Sql Roll Back Profile ', mosy_sql_roll_back_input_wgt(mosy_sql_roll_back_js_input,'mosy_sql_roll_back_update_btn:Update:check-circle',''), '');initialize_mosy_sql_roll_back(&quot where primkey='{{primkey}}'&quot;);push_newval('mosy_sql_roll_back_uptoken', btoa({{primkey}}))"><td></td>

<td scope="col">{{table_name}}</td>
<td scope="col">{{roll_type}}</td>
<td scope="col">{{where_str}}</td>
<td scope="col">{{roll_timestamp}}</td>
<td scope="col">{{value_entries}}</td>
</tr>`;


 var notification_manifest__list_nodes=`<tr class="cpointer" onclick="mosy_card('Notification Manifest  Profile ', notification_manifest__input_wgt(notification_manifest__js_input,'notification_manifest__update_btn:Update:check-circle',''), '');initialize_notification_manifest_(&quot where primkey='{{primkey}}'&quot;);push_newval('notification_manifest__uptoken', btoa({{primkey}}))"><td></td>

<td scope="col">{{notification_type}}</td>
<td scope="col">{{notification_state}}</td>
<td scope="col">{{notification_icon}}</td>
<td scope="col">{{notification_title}}</td>
<td scope="col">{{notification_link}}</td>
<td scope="col">{{notification_read_state}}</td>
<td scope="col">{{site_id}}</td>
<td scope="col">{{notification_time_stamp}}</td>
<td scope="col">{{notif_remark}}</td>
</tr>`;


 var requests_list_nodes=`<tr class="cpointer" onclick="mosy_card('Requests Profile ', requests_input_wgt(requests_js_input,'requests_update_btn:Update:check-circle',''), '');initialize_requests(&quot where primkey='{{primkey}}'&quot;);push_newval('requests_uptoken', btoa({{primkey}}))"><td></td>

<td scope="col">{{locomotive}}</td>
<td scope="col">{{tail}}</td>
<td scope="col">{{train}}</td>
<td scope="col">{{status}}</td>
<td scope="col">{{tryin_hour}}</td>
<td scope="col">{{tryin_min}}</td>
<td scope="col">{{denial_reason}}</td>
<td scope="col">{{direction}}</td>
<td scope="col">{{destination_station_id}}</td>
<td scope="col">{{origin_station_id}}</td>
<td scope="col">{{added_by}}</td>
<td scope="col">{{date_added}}</td>
<td scope="col">{{deleted}}</td>
<td scope="col">{{modified_by}}</td>
<td scope="col">{{exit_status}}</td>
<td scope="col">{{current_station}}</td>
</tr>`;


 var stations_list_nodes=`<tr class="cpointer" onclick="mosy_card('Stations Profile ', stations_input_wgt(stations_js_input,'stations_update_btn:Update:check-circle',''), '');initialize_stations(&quot where primkey='{{primkey}}'&quot;);push_newval('stations_uptoken', btoa({{primkey}}))"><td></td>

<td scope="col">{{station_name}}</td>
<td scope="col">{{station_code}}</td>
<td scope="col">{{station_type}}</td>
<td scope="col">{{station_length}}</td>
<td scope="col">{{geofence}}</td>
<td scope="col">{{remark}}</td>
<td scope="col">{{station_location}}</td>
<td scope="col">{{loop_line_position}}</td>
<td scope="col">{{speed_limit}}</td>
<td scope="col">{{station_number}}</td>
</tr>`;


 var users_list_nodes=`<tr class="cpointer" onclick="mosy_card('Users Profile ', users_input_wgt(users_js_input,'users_update_btn:Update:check-circle',''), '');initialize_users(&quot where primkey='{{primkey}}'&quot;);push_newval('users_uptoken', btoa({{primkey}}))"><td></td>
<td scope="col"> <img src="{{user_pic}}" style="width:50px; height:50px; border-radius:50%;"/></td>

<td scope="col">{{name}}</td>
<td scope="col">{{email}}</td>
<td scope="col">{{tel}}</td>
<td scope="col">{{login_password}}</td>
<td scope="col">{{ref_id}}</td>
<td scope="col">{{regdate}}</td>
<td scope="col">{{user_no}}</td>
<td scope="col">{{user_gender}}</td>
<td scope="col">{{last_seen}}</td>
<td scope="col">{{about}}</td>
</tr>`;



        var line_manager_list_wgt =`
        <div class="table-responsive data-tables skin_plasma" style="margin-top: 20px; padding-bottom: 150px;">
<table class="table text-left" id="line_manager_data_table">
	    <thead class="text-uppercase">
		   <tr>
		      <th scope="col">#</th>              
            	      
				             <th scope="col">Line Name</th>
             <th scope="col">Line Length</th>
             <th scope="col">Remark</th>

		   </tr>
	    </thead>
	    <tbody id="line_manager_tbl_list">

  <!--add_new_row_here-->
	    </tbody>
	    </table>
        </div>
        `;
        
        
        var line_stations_list_wgt =`
        <div class="table-responsive data-tables skin_plasma" style="margin-top: 20px; padding-bottom: 150px;">
<table class="table text-left" id="line_stations_data_table">
	    <thead class="text-uppercase">
		   <tr>
		      <th scope="col">#</th>              
            	      
				             <th scope="col">Line Id</th>
             <th scope="col">Line Name</th>
             <th scope="col">Line Length</th>
             <th scope="col">Station Id</th>
             <th scope="col">Station Name</th>
             <th scope="col">Station Length</th>
             <th scope="col">Remark</th>
             <th scope="col">Station Number</th>

		   </tr>
	    </thead>
	    <tbody id="line_stations_tbl_list">

  <!--add_new_row_here-->
	    </tbody>
	    </table>
        </div>
        `;
        
        
        var mosy_sql_roll_back_list_wgt =`
        <div class="table-responsive data-tables skin_plasma" style="margin-top: 20px; padding-bottom: 150px;">
<table class="table text-left" id="mosy_sql_roll_back_data_table">
	    <thead class="text-uppercase">
		   <tr>
		      <th scope="col">#</th>              
            	      
				             <th scope="col">Table Name</th>
             <th scope="col">Roll Type</th>
             <th scope="col">Where Str</th>
             <th scope="col">Roll Timestamp</th>
             <th scope="col">Value Entries</th>

		   </tr>
	    </thead>
	    <tbody id="mosy_sql_roll_back_tbl_list">

  <!--add_new_row_here-->
	    </tbody>
	    </table>
        </div>
        `;
        
        
        var notification_manifest__list_wgt =`
        <div class="table-responsive data-tables skin_plasma" style="margin-top: 20px; padding-bottom: 150px;">
<table class="table text-left" id="notification_manifest__data_table">
	    <thead class="text-uppercase">
		   <tr>
		      <th scope="col">#</th>              
            	      
				             <th scope="col">Notification Type</th>
             <th scope="col">Notification State</th>
             <th scope="col">Notification Icon</th>
             <th scope="col">Notification Title</th>
             <th scope="col">Notification Link</th>
             <th scope="col">Notification Read State</th>
             <th scope="col">Site Id</th>
             <th scope="col">Notification Time Stamp</th>
             <th scope="col">Notif Remark</th>

		   </tr>
	    </thead>
	    <tbody id="notification_manifest__tbl_list">

  <!--add_new_row_here-->
	    </tbody>
	    </table>
        </div>
        `;
        
        
        var requests_list_wgt =`
        <div class="table-responsive data-tables skin_plasma" style="margin-top: 20px; padding-bottom: 150px;">
<table class="table text-left" id="requests_data_table">
	    <thead class="text-uppercase">
		   <tr>
		      <th scope="col">#</th>              
            	      
				             <th scope="col">Locomotive</th>
             <th scope="col">Tail</th>
             <th scope="col">Train</th>
             <th scope="col">Status</th>
             <th scope="col">Tryin Hour</th>
             <th scope="col">Tryin Min</th>
             <th scope="col">Denial Reason</th>
             <th scope="col">Direction</th>
             <th scope="col">Destination Station Id</th>
             <th scope="col">Origin Station Id</th>
             <th scope="col">Added By</th>
             <th scope="col">Date Added</th>
             <th scope="col">Deleted</th>
             <th scope="col">Modified By</th>
             <th scope="col">Exit Status</th>
             <th scope="col">Current Station</th>

		   </tr>
	    </thead>
	    <tbody id="requests_tbl_list">

  <!--add_new_row_here-->
	    </tbody>
	    </table>
        </div>
        `;
        
        
        var stations_list_wgt =`
        <div class="table-responsive data-tables skin_plasma" style="margin-top: 20px; padding-bottom: 150px;">
<table class="table text-left" id="stations_data_table">
	    <thead class="text-uppercase">
		   <tr>
		      <th scope="col">#</th>              
            	      
				             <th scope="col">Station Name</th>
             <th scope="col">Station Code</th>
             <th scope="col">Station Type</th>
             <th scope="col">Station Length</th>
             <th scope="col">Geofence</th>
             <th scope="col">Remark</th>
             <th scope="col">Station Location</th>
             <th scope="col">Loop Line Position</th>
             <th scope="col">Speed Limit</th>
             <th scope="col">Station Number</th>

		   </tr>
	    </thead>
	    <tbody id="stations_tbl_list">

  <!--add_new_row_here-->
	    </tbody>
	    </table>
        </div>
        `;
        
        
        var users_list_wgt =`
        <div class="table-responsive data-tables skin_plasma" style="margin-top: 20px; padding-bottom: 150px;">
<table class="table text-left" id="users_data_table">
	    <thead class="text-uppercase">
		   <tr>
		      <th scope="col">#</th>              
            	      <th>User Pic</th>
				             <th scope="col">Name</th>
             <th scope="col">Email</th>
             <th scope="col">Tel</th>
             <th scope="col">Login Password</th>
             <th scope="col">Ref Id</th>
             <th scope="col">Regdate</th>
             <th scope="col">User No</th>
             <th scope="col">User Gender</th>
             <th scope="col">Last Seen</th>
             <th scope="col">About</th>

		   </tr>
	    </thead>
	    <tbody id="users_tbl_list">

  <!--add_new_row_here-->
	    </tbody>
	    </table>
        </div>
        `;
        
        
