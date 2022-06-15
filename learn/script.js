var item=document.getElementById('imageItem');
        var divEle=document.querySelector('#divItem');
        function changer()
        {
            divEle.innerHTML="<p>Yor data is lost</p>";
        }
        function reset()
        {
            item.removeAttribute("hidden","true");
        }
        function hide(){
            item.setAttribute("hidden","true");
        }
        function changeImg()
        {
            item.removeAttribute("src","eventflow.png");
            item.setAttribute("src","JavaScript-DOM-Level-2-Event.png");
        }
        function resetImg()
        {
            item.removeAttribute("src","JavaScript-DOM-Level-2-Event.png");
            item.setAttribute("src","eventflow.png");
        }