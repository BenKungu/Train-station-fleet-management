    //<!--next_ajax_str-->
var calc_ui=`
<div class="row justify-content-center m-0 p-0 col-md-12">
 <input typ="text" class="col-md-12 bg-light p-3 border mb-3 h1 text-right" title="Click To Clear Screen" id="screen"/>
  <div class="row justify-content-center m-0 p-0 col-md-12">
  <div class="col-4  h1 cpointer " onclick="push_newval("screen", get_newval("screen")+1)">1</div>
  <div class="col-4  h1 cpointer " onclick="push_newval('screen', get_newval('screen')+2)">2</div>
  <div class="col-4  h1 cpointer " onclick="push_newval('screen', get_newval('screen')+3)">3</div>
  <div class="col-4  h1 cpointer " onclick="push_newval('screen', get_newval('screen')+4)">4</div>
  <div class="col-4  h1 cpointer " onclick="push_newval('screen', get_newval('screen')+5)">5</div>
  <div class="col-4  h1 cpointer " onclick="push_newval('screen', get_newval('screen')+6)">6</div>
  <div class="col-4  h1 cpointer " onclick="push_newval('screen', get_newval('screen')+7)">7</div>
  <div class="col-4  h1 cpointer " onclick="push_newval('screen', get_newval('screen')+8)">8</div>
  <div class="col-4  h1 cpointer " onclick="push_newval('screen', get_newval('screen')+9)">9</div>
  <div class="col-4  h1 cpointer " onclick="push_newval('screen', get_newval('screen')+0)">0</div>
  <div class="col-4  h1 cpointer " onclick="push_newval('screen', get_newval('screen')+'*')">*</div>
  <div class="col-4  h1 cpointer " onclick="push_newval('screen', get_newval('screen')+'+')">+</div>
  <div class="col-4  h1 cpointer " onclick="push_newval('screen', get_newval('screen')+'-')">-</div>
  <div class="col-4  h1 cpointer " onclick="push_newval('screen', get_newval('screen')+'/')">/</div>
  <div class="col-4  h1 cpointer " onclick="push_newval('screen', get_newval('screen')+'='+eval(get_newval('screen')));push_newval('notes', get_newval('notes')+'|'+get_newval('screen'))">=</div>
  <div class="row justify-content-center m-0 p-0 col-md-12">
  <input class="border-0" style="" id="notes" placeholder="notes"></input> </div>
  </div>
</div>  
  
  
`;


var enterline_comp =`
  										<div class="row justify-content-start m-0 p-0 col-md-12" id="">
											 <div class='row justify-content-start m-0 p-0 col-md-12 border border_set hidden' id='request_sent'>
												 <div class='col-3'>
													 <img src='SiteAssets/images/sentmessage.png' class="pop_icon">
                                                   
												 </div>
												 <div class="col-9 text-left pl-0  ">
													 <div>
														 <h5 class="pt-2 bold">Request Sent <span class="fa fa-check"></span></h5>
														 <p  class=" text-left " id="requestsent-recommendation">
                                                           <span class=" text-wrap">Please wait for confirmation of receipt. <span class="fa fa-spinner fa-pulse fa-fw"></span></span>&nbsp;</p>
													 </div>
												 </div>
											 </div>
											 <div class='row justify-content-start m-0 p-0 col-md-12 border border_set hidden' id='request_rec'>
												 <div class="col-3">
													 <img src="SiteAssets/images/receivedmessage.png" class="pop_icon">
												 </div>
												 <div class="col-9 text-left">
													 <div>
														 <h5 class="pt-2 bold ">Request Received <span class="fa fa-check"></span> </h5>
														 <p id="requestreceived-recommendation" class=" text-wrap  ">Please wait for authorization to enter line.&nbsp;<span class="fa fa-spinner fa-pulse fa-fw"></span></p>
													 </div>
												 </div>
 
											 </div>
											 <div class='row justify-content-start m-0 p-0 col-md-12 border border_set hidden' id='request_auth'>
												 <div class="col-3">
													 <img src="SiteAssets/images/seenmessage.png" class="pop_icon">
												 </div>
												 <div class="col-9 text-left">
													 <div>
														 <h5 class="pt-2 bold ">Request Authorized <i class="fa fa-check"></i> </h5>
														 <p  class="  text-wrap" id="requestaknowledged-recommendation">Please wait for license.&nbsp;<span class="fa fa-spinner fa-pulse fa-fw"></span></p>
													 </div>
												 </div>
											 </div> 
											 <div class=' border border_set pb-2 row justify-content-start m-0 p-0 col-md-12 hidden' id='license_issued'>
												 <div class="col-3">
													 <img src="SiteAssets/images/aknowledgedmessage.png" class="pop_icon">
												 </div>
												 <div class="col-9 text-left pt-2">
													 <div>
														 <h5 class="bold">License Issued</h5>
														 <p class="  text-wrap" id="licenseissued-recommendation">Please confirm receipt of license.&nbsp;<span class="fa fa-spinner fa-pulse fa-fw"></span></p>
													 </div>
												 </div>
												 <div class="license-status-options" id="licenseissued-spinner">
													 <button onclick="push_newval('txt_status','Accepted');update_reqs()" class="btn btn_neo " type="button">Confirm</button>
												 </div>
											 </div>
											 <div class='row justify-content-start m-0 p-0 col-md-12 border border_set hidden' id='license_issued_conf'>
												 <div class="col-3">
													 <img src="SiteAssets/images/requestentry.png" class="pop_icon">
												 </div>
												 <div class="col-9 text-left">
													 <div>
														 <h5 class="bold pt-2">License Confirmed</h5>
														 <p id="licenseconfirmed-recommendation">Safe journey. Alert OCC before you start your journey.</p>
													 </div>
												 </div>
												 <div class="license-status-options pb-3" id="alert_sent_btn">
													 <button id="confirm_start_journey" onclick="push_newval('txt_status','Active');update_reqs()"  class="btn btn_neo " type="button">Send Alert</button>
												 </div>
											 </div>
											 <div class='row justify-content-start m-0 p-0 col-md-12 border border_set hidden' id='request_denied'>
												 <div class="col-3">
													 <img src="SiteAssets/images/messagerefused.png" class="pop_icon">
												 </div>
												 <div class="col-9 text-left">
													 <div>
														 <h5 class="bold pt-3">Request Denied</h5>
														 <p>The OCC has denied your request to enter line with: <span id="reason_denied_entry"></span>. Please try again after: <span id="time_to_try_again"></span>.</p>
													 </div>
												 </div>
												 <div class="license-status-options" id="licenseconfirmed-spinner">
												 </div>
											 </div>
										 </div>
  `;






var exitline_comp =`
  										<div class="row justify-content-start m-0 p-0 col-md-12" id="">
											 <div class='row justify-content-start m-0 p-0 col-md-12 border border_set hidden' id='exit_req'>
												 <div class='col-3'>
													 <img src='SiteAssets/images/sentmessage.png' class="pop_icon">
                                                   
												 </div>
												 <div class="col-9 text-left pl-0  ">
													 <div>
														 <h5 class="pt-2 bold">Request Sent <span class="fa fa-check"></span></h5>
														 <p  class=" text-left " id="requestsent-recommendation">
                                                           <span class=" text-wrap">Please wait for confirmation of receipt. <span class="fa fa-spinner fa-pulse fa-fw"></span></span>&nbsp;</p>
													 </div>
												 </div>
											 </div>
											 <div class='row justify-content-start m-0 p-0 col-md-12 border border_set hidden' id=''>
												 <div class="col-3">
													 <img src="SiteAssets/images/receivedmessage.png" class="pop_icon">
												 </div>
												 <div class="col-9 text-left">
													 <div>
														 <h5 class="pt-2 bold ">Request Received <span class="fa fa-check"></span> </h5>
														 <p id="requestreceived-recommendation" class=" text-wrap  ">Please wait for authorization to enter line.&nbsp;<span class="fa fa-spinner fa-pulse fa-fw"></span></p>
													 </div>
												 </div>
 
											 </div>
											 <div class='row justify-content-start m-0 p-0 col-md-12 border border_set hidden' id='line_excited_lisc'>
												 <div class="col-3">
													 <img src="SiteAssets/images/seenmessage.png" class="pop_icon">
												 </div>
												 <div class="col-9 text-left">
													 <div>
														 <h5 class="pt-2 bold ">Request Authorized <i class="fa fa-check"></i> </h5>
														 <p  class="  text-wrap" id="requestaknowledged-recommendation">Please wait for license.&nbsp;<span class="fa fa-spinner fa-pulse fa-fw"></span></p>
													 </div>
												 </div>
											 </div> 
											 <div class=' border border_set pb-2 row justify-content-start m-0 p-0 col-md-12 hidden' id='conf_exit_line'>
												 <div class="col-3">
													 <img src="SiteAssets/images/aknowledgedmessage.png" class="pop_icon">
												 </div>
												 <div class="col-9 text-left pt-2">
													 <div>
														 <h5 class="bold">License Issued</h5>
														 <p class="  text-wrap" id="licenseissued-recommendation">You have been licensed to exit line. Please confirm exit.&nbsp;<span class="fa fa-spinner fa-pulse fa-fw"></span></p>
													 </div>
												 </div>
												 <div class="license-status-options" id="licenseissued-spinner">
													 <button onclick="push_newval('txt_status','Complete');update_reqs()" class="btn btn_neo " type="button">Confirm</button>
												 </div>
											 </div>
											 <div class='row justify-content-start m-0 p-0 col-md-12 border border_set hidden' id='exit_license_issued_conf'>
												 <div class="col-3">
													 <img src="SiteAssets/images/requestentry.png" class="pop_icon">
												 </div>
												 <div class="col-9 text-left">
													 <div>
														 <h5 class="bold pt-2">Exit Confirmed</h5>
														 <p id="licenseconfirmed-recommendation"> You have been licensed to exit line. Please confirm exit..</p>
													 </div>
												 </div>
												 <div class="license-status-options pb-3" id="alert_sent_btn">
													 <button id="confirm_start_journey" onclick="push_newval('txt_status','Complete');update_reqs()"  class="btn btn_neo " type="button">Send Alert</button>
												 </div>
											 </div>
											 <div class='row justify-content-start m-0 p-0 col-md-12 border border_set hidden' id='request_denied'>
												 <div class="col-3">
													 <img src="SiteAssets/images/messagerefused.png" class="pop_icon">
												 </div>
												 <div class="col-9 text-left">
													 <div>
														 <h5 class="bold pt-3">Request Denied</h5>
														 <p>The OCC has denied your request to exit line: <span id="reason_denied_entry"></span>. Please try again after: <span id="time_to_try_again"></span>.</p>
													 </div>
												 </div>
												 <div class="license-status-options" id="licenseconfirmed-spinner">
												 </div>
											 </div>
										 </div>
  `;



function sys_login_()
{
  if(mosy_validate_required(['txt_username:Username required','txt_password:Password Required'])==1)
  {
    mosy_form_data('mosy_form','sys_login_','load_login_resp')
  }
}

function load_login_resp(resp)
{
  //alert(resp)
    
  if(resp=="Redirect")
  {
    new_location('obc');
    push_html('login_err', '')
  }else{
    push_html('login_err', resp)
  }
}


//==== update q
function update_reqs(callback_fun="qreqs:Requests Updated")
{
  var vldt =['txt_status'];
  
  var required_val = mosy_validate_required(vldt)
  if(required_val==1)
  {
   magic_message('Processing Request...', 'dialog_box');
   requests_updt_('mosy_form',vldt, 'mosy_refresh');
   //requests_updt_('mosy_form',vldt, 'mosy_response');
  }
  
}
 
  
function load_curr_req()
{
  mosyajax_get('load_curr_req', 'load_curr_req_id')
}
  
function load_curr_req_id(id)
{
  push_newval('requests_uptoken', btoa(id));
}

function line_station_options()
{
 
    mosyajax_get('stations_options='+get_newval('txt_line_id'), 'push_st_options')
           
}


function push_st_options(server_resp)
{
  ///alert(server_resp)
  push_html('txt_origin', server_resp)
  push_html('txt_dest_', server_resp)
}


function load_zone_data(zone_id)
{
 
    mosyajax_get('get_zone_data='+zone_id, 'push_zone_options')
           
}


function push_zone_options(server_resp)
{
  ///alert(server_resp)
  push_html('txt_section_code', server_resp)
}



function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
          magic_message("Geolocation is not supported by this browser.", 'dialog_box');
  }
}

function showPosition(position) {
  
  push_newval('txt_location', position.coords.latitude +","+ position.coords.longitude);
  

}


          function geoapify_xy()
          {
            push_html('location_name_span', '<i class="fa fa-spinner fa-spin"></i> Detecting location ... ');
            
              fetch('https://api.geoapify.com/v1/ipinfo?apiKey=a6e2034117054e4bae42456ea5e55a19', { 
                method: 'GET'
              })
              .then(function(response) { return response.json(); })
              .then(function(json) {
                // use the json
                ///alert(json)
                //alert(json.country.names.en);
                console.log(json.location.latitude+", "+json.location.longitude)
                                
                var user_city =json.city.names.en;
                var user_country = json.country.names.en;
                
                var add_def_location = user_city+" "+user_country;

                
            	var clean_location_url = add_def_location.replace(" ","+");
            
                push_html('location_name_span', '');
                push_html('txt_mobi_location_locked', 'geoapify');

                push_newval('txt_location', json.location.latitude+", "+json.location.longitude);
                
            	///document.getElementById('embedmapframe').src = 'https://maps.google.com/maps?q='+clean_location_url+'&z=17&output=embed';
                


              });          


            }

function push_mobi_coord()
{
         mosytoggle_remclass('map_tray','hidden');
        
         if(get_newval('txt_mobi_location_locked')==="" || get_newval('txt_mobi_location_locked')==="geoapify")
         {                        
             push_newval('txt_mobi_location_locked','locked')
             document.getElementById('embedmapframe').src='https://maps.google.com/?q='+get_newval('txt_location')+'&z=17&output=embed';
             push_html('curr_loc'," "+get_newval('txt_location'))
         }
}