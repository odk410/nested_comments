$(function () {
    $(".cancel-comment-link").on("click", function(e){
        e.preventDefault();
        // 현재 edit, reply 버튼을 누르면 입력 form이 나온다.
        // 입력 form이 나온 상태에서 cancel 버튼을 누르면 href 속성이 사라져 있어 다시 입력 form이 나오지 않는다.
        // 그래서 edit, reply 버튼에 href 속성을 부여해준다.

        //replied는 reply면 true, 아니면 flase
        replied = $(this).data('reply');
        $comment = $(this).closest('.comment');
        $form = $(this).closest('form');
        $restore_link = $comment.find('a.delete-comment-link')[0];

        if (replied) {
            $reply_link = $comment.find('a.reply-comment-link')[0];
            $reply_link.href = $restore_link + "/reply";
        }
        $edit_link = $comment.find('.edit-comment-link')[0];
        $edit_link.href = $restore_link + "/edit";
        $form.remove();
    })
})
