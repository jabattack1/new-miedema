console.log('yo');

// $(window).load(function(){
//     setTimeout(function() {
//       $('.loader').fadeOut();
//     }, 2000);
// });

var movie1= "<iframe width='800' height='600' src='https://www.youtube.com/embed/EKeTpxznWe8?autoplay=1&&mute=1&controls=0&loop=1&showinfo=0&playlist=EKeTpxznWe8' frameborder='0' scrolling='no' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"


// var movie2= "<img id='movieb' src='https://i.imgur.com/J6sjDIU.gif' />"
// var movie3= "<img id='moviec' src='https://i.imgur.com/Yy5iWrE.gif' />"
// var movie4= "<img id='movied' src='https://i.imgur.com/Ix3pFXW.gif' />"
var orderPage = "<div id='order'><img id='closeOrder' src='https://i.imgur.com/sDhfEIZ.png' height='42' width='42' onClick='closeOrderWindow();return false;'><div id='orderContainer'><h2 id='orderHead'>Submit An Item</h2><input type='text' name='fname' id='firstNameInput' placeholder='Full Name'><br><input type='text' name='pemail' id='emailInput' placeholder='Email'><br><input type='text' name='street' id='streetInput' placeholder='Street'><br><input type='text' name='City' id='cityInput' placeholder='City'><br><input type='text' name='State' id='stateInput' placeholder='State'><br><input type='text' name='zip' id='zipInput' placeholder='Zip Code'><p id='sport'>Sport:</p><form id='sportSelector' action=''><input type='radio' id='baseballRadio' name='sport' value='baseball'>Baseball<input type='radio' id='footballRadio' name='sport' value='football'>Football<input type='radio' id='basketballRadio' name='sport' value='basketball'>Basketball</form><p id='type'>What Are You Submitting?:</p><input type='checkbox' id='checkbox'><span id='checkmark'></span><label id='checkContainer'>Quick Opinion</label><form id='itemSelector' action=''><input type='radio' id='jerseylRadio' name='itemType' value='jersey'>Jersey<input type='radio' id='hatRadio' name='itemType' value='hat'>Hat<input type='radio' id='pantsRadio' name='itemType' value='pants'>Pants/Shorts</form><input type='text' name='playerName' id='playerNameInput' placeholder='Player Name'><p id='paymentOptions'>Payment Type:</p><form id='paymentSelector' action=''><input type='radio' id='paypalRadio' name='payment' value='paypal'>Paypal/CC<input type='radio' id='checksRadio' name='payment' value='check'>Check/Money Order</form><a href='#'' class='myButton'>Submit Order</a><p id='scam'>If you selected Paypal/CC as your payment method, we will send you a Paypal invoice to the email address you've provided. Please submit payment through the Paypal invoice.</p></div></div>"

function submitAnItem(){
  console.log('trigger');
  $('#order').show();
}

function closeOrderWindow(){
  console.log('close');
  $('#order').hide();
}

$(document).ready(function() {
	$('#media').append(movie1);
	$('#moviea').hide();
  $('body').append(orderPage);
  $('#order').hide();


	// $('#media').append(movie2);
 //   	$('#movieb').hide();
 //   	$('#media').append(movie3);
 //   	$('#moviec').hide();
 //   	$('#media').append(movie4);
 //    $('#movied').hide();

	// setTimeout(function() {
 //    	$('#moviea').show();
 //  	}, 0);
 //  	setTimeout(function() {
 //    	$('#moviea').hide();
 //    }, 10000);
 //    setTimeout(function() {
 //    	$('#movieb').show();
 //    }, 10001);
 //    setTimeout(function() {
 //    	$('#movieb').hide();
 //    }, 20000);
 //    setTimeout(function() {
 //    	$('#moviec').show();
 //    }, 20001);
 //    setTimeout(function() {
 //    	$('#moviec').hide();
 //   	}, 30000);
 //    setTimeout(function() {
 //    	$('#movied').show();
 //    }, 30001);
 //    setTimeout(function() {
 //    	$('#movied').hide();
 //   	}, 40000);

	// setInterval(function() {
	// 	setTimeout(function() {
 //    		$('#moviea').show();
 //  		}, 0);
 //  		setTimeout(function() {
 //    		$('#moviea').hide();
 //    	}, 10000);
 //    	setTimeout(function() {
 //    		$('#movieb').show();
 //    	}, 10001);
 //    	setTimeout(function() {
 //    		$('#movieb').hide();
 //    	}, 20000);
 //    	setTimeout(function() {
 //    		$('#moviec').show();
 //    	}, 20001);
 //    	setTimeout(function() {
 //    		$('#moviec').hide();
 //   		}, 30000);
 //    	setTimeout(function() {
 //    		$('#movied').show();
 //    	}, 30001);
 //    	setTimeout(function() {
 //    		$('#movied').hide();
 //   		}, 40000);
 //    }, 40000);

});



$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});