$(document).ready(() => {
    $('form').on('submit', (e) => {
        e.preventDefault();
        const novaTarefa = $('#novaTarefa').val();

        if (novaTarefa.trim() !== '') {
            $('ul').append(`<li>${novaTarefa}</li>`);
        }

        $('#novaTarefa').val('');

        $(document).on('click', 'li', function () {
            $(this).toggleClass('tarefaCompleta');
        });
    })
})