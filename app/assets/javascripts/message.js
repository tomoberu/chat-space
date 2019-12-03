$(function(){
  var buildHTML = function(message) {
    message__html = ""
    image__html = ""
    if (message.image) {
      //data-idが反映されるようにしている
      var html = `<div class="contents__center" data-message_id=` + message.id + `>` +
        `<div class="contents__top">` +
          `<div class="contents__top__name">` +
            message.user_name +
          `</div>` +
          `<div class="contents__top__date">` +
            message.created_at +
          `</div>` +
        `</div>` +
        `<div class="contents__top__message">` +
          `<p class="lower-message__content">` +
            message.content +
          `</p>` +
          `<img src="` + message.image + `" class="lower-message__image" >` +
        `</div>` +
      `</div>`
    } else {
      //同様に、data-idが反映されるようにしている
      var html = `<div class="contents__center" data-message_id=` + message.id + `>` +
        `<div class="contents__top">` +
          `<div class="contents__top">` +
            message.user_name +
          `</div>` +
          `<div class="contents__top__date">` +
            message.created_at +
          `</div>` +
        `</div>` +
        `<div class="contents__top__message">` +
          `<p class="lower-message__content">` +
            message.content +
          `</p>` +
        `</div>` +
      `</div>`
    };
    return html;
  };
      var reloadMessages = function() {
        last_message_id = $('.contents__center:last').data('id');
        $.ajax({
          url: $('.contents__center:last').data('id'),
          type: 'get',
          dataType: 'json',
          data: {id: last_message_id}
        })
        .done(function(messages) {
          //追加するHTMLの入れ物を作る
          var insertHTML = '';
          //配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる
          $.each(messages, function(i, message) {
            insertHTML += buildHTML(message)
          });
          //メッセージが入ったHTMLに、入れ物ごと追加
          $('.messages').append(insertHTML);
          $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');   
        })
        .fail(function() {
          console.log('error');
        });
        setInterval(reloadMessages, 7000);
      };
      function buildHTML(message){
        let image_html = "";
        if (message.image) {
           image_html = `<img src=${message.image} ></img>`
        }
          var html = 
          `<div class="contents__top" data-message-id=${message.id}>
            <div class="contents__top__name">
                  ${message.user_name}
            </div>
            <div class="contents__top__date">
            ${message.date}
            </div>
          </div>
          <div class="contents__top__message">
              <p class="lower-message__content">
                ${message.content}
              </p>
              ${image_html}
          </div>`
          return html;
      }
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
      var html = buildHTML(data);
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
