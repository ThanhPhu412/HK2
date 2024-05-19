$(document).ready(function() {
  // Thêm công việc mới
  $('.todo-input').keypress(function(event) {
    if (event.which === 13) { // Enter key
      var todoText = $(this).val();
      if (todoText.trim() !== '') {
        $('.todo-list').append('<li class="todo-item">' + todoText + ' <button class="btn btn-link delete-btn">X</button></li>');
        $(this).val('');
      }
    }
  });

  // Xóa công việc
  $('.todo-list').on('click', '.delete-btn', function() {
    $(this).parent().remove();
  });

  // Lọc công việc
  $('.input-group-append').on('click', 'button', function() {
    var filterType = $(this).text().toLowerCase();
    if (filterType === 'all') {
      $('.todo-item').show();
    } else if (filterType === 'active') {
      $('.todo-item').hide();
      $('.todo-item').each(function() {
        if (!$(this).hasClass('completed')) {
          $(this).show();
        }
      });
    } else if (filterType === 'completed') {
      $('.todo-item').hide();
      $('.todo-item').each(function() {
        if ($(this).hasClass('completed')) {
          $(this).show();
        }
      });
    }
  });

  // Đánh dấu công việc đã hoàn thành
  $('.todo-list').on('click', '.todo-item', function() {
    $(this).toggleClass('completed');
  });

  // Lọc công việc theo từ khóa
  $('.filter-input').on('keyup', function() {
    var filterText = $(this).val().toLowerCase();
    $('.todo-item').each(function() {
      var todoText = $(this).text().toLowerCase();
      if (todoText.includes(filterText)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
});
