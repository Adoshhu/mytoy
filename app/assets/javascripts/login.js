$(function() {
    $('#login-form').on('submit', function(e) {
      e.preventDefault();
      $.ajax({
        url: $(this).attr('action'),
        type: 'POST',
        data: $(this).serialize(),
        dataType: 'json',
        success: function(data) {
          if (data.success) {
            window.location.href = '/';
          } else {
            $('.error-message').text(data.errors.join(', '));
          }
        },
        error: function(xhr, status, error) {
          console.error(xhr.responseText);
        }
      });
    });
  });
  