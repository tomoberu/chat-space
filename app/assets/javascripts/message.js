$(function(){
  var buildHTML2 = function(message) {
    let image_html = "";
        if (message.image) {
           image_html = `<img src=${message.image} ></img>`
        }
      var html = `
        <div class="contents__center" data-id=${message.id}>
        <div class="contents__top">
            <div class="contents__top__name">
                  ${message.user_name}
            </div>
            <div class="contents__top__date">
                  ${message.created_at}
            </div>
          </div>
          <div class="contents__top__message">
              <p class="lower-message__content">
                ${message.content}
              </p>
                ${image_html}
          </div>`;
    return html;
  };
      var reloadMessages = function() {
        last_message_id = $('.contents__center:last').data('id');
        $.ajax({
          url: "api/messages/",
          type: 'GET',
          dataType: 'json',
          data: {id: last_message_id}
        })
        .done(function(messages) {
          var insertHTML = '';
          messages.forEach(function(messages){
            insertHTML += buildHTML2(messages)
          });
          if (messages.length != 0){
          $('.contents').append(insertHTML);
          $('.contents').animate({scrollTop: $('.contents')[0].scrollHeight}, 'fast'); 
          }  
        })
        .fail(function() {
          alert('error');
        });
      };
      setInterval(reloadMessages, 7000);
  $('#new_message').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML2(data);
      $('.contents').append(html);
      $('.contents').animate({scrollTop: $('.contents')[0].scrollHeight}, 'fast');         
      $('form')[0].reset();
    })
    .fail(function(){
      alert('error');
    });
    return false;
  });
 
});
