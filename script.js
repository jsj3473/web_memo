document.addEventListener('DOMContentLoaded', function() {
  var memoContent = document.getElementById('memo-content');
  var saveButton = document.getElementById('save-button');
  var clearButton = document.getElementById('clear-button');
  var memoList = document.getElementById('memo-list');

  saveButton.addEventListener('click', function() {
    var content = memoContent.value.trim();
    if (content !== '') {
      var listItem = document.createElement('li');
      listItem.textContent = content;
      memoList.appendChild(listItem);
      memoContent.value = '';
    }
  });

  clearButton.addEventListener('click', function() {
    memoContent.value = '';
  });
});
