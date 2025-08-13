document.querySelectorAll('.todo-list li').forEach(function(item) {
    item.addEventListener('click', function() {
        item.classList.toggle('completed');
    });
});