$(function(){
      function buildHTML(message){

        let image_html = "";
        if (message.image) {
           image_html = `<img src=${message.image} ></img>`
          //image変数に<img src=${message.image} >を代入するコードを記入する
        }
        // }else
        // {
        //   //let image = ""
        //   //image変数に空欄を代入する
        // }
        
        //if (message.image) {
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
            </div>
              ${image_html}
          </div>`
          return html;
       // } else {
          var html =
          `<div class="contents__top" data-message-id=${message.id}></div>
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
             </div>
          </div>`
          return html;
       // };
      }
  $('#new_message').on('submit', function(e){
    console.log("ok")
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
})
