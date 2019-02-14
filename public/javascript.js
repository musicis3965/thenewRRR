$(function() {
  var now = new Date(),
      days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
      day = days[now.getDay()],
      $button = $('#creditButton');

  if (
    day === days[0] //sunday
    || day === days[1] //monday
    || day === days[2] //tuesday
    || day === days[3] //wednesday
    || day === days[4] //thursday
    // || day === days[5] //friday
    || day === days[6] //saturday
    ) {
      $button.addClass('disabled');
      $( "#creditText" ).html("<h2>No credits available at this time</h2>");
  }

  $button.click(function() {
      if ($(this).hasClass('disabled')) {
          alert('check back friday!');
          return;
      } else {
        var date = [now.getDay()];
        var credit = parseInt($("#creditValue").text());
        credit = credit +3;
        console.log(date);
        $.post("/updateCredit", {
          credit: credit,
          date: date
        },function(){$("#creditValue").text(credit);});
      }
  });
});


  //$voteButton = $('.downVote');

$('.downVote').click(minusCredit)
$('.upVote').click(minusCredit)
$('.songSubmit').click(minusCredit)

  function minusCredit(){

      var credit = parseInt($("#creditValue").text());
      credit = credit -1;
      console.log(credit);
      if (credit >= 0) {
        $.post("/updateJustCredit", {
          credit: credit
        },function(){$("#creditValue").text(credit);});
      }

      if(credit == 0){
        $('.downVote, .upVote').addClass('disabled').attr('disabled', 'disabled')
      }
  }
