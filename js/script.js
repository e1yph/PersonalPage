function copyToClipboard() {
    const str = document.getElementById('copyText').innerText;
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    
    const button = document.getElementById("copyText");
    const text = button.innerText;
    navigator.clipboard.writeText(text);
    const notification = document.createElement('span');
    notification.classList.add('copy-notification');
    notification.textContent = 'Текст скопирован в буфер обмена'; 
    button.parentNode.insertBefore(notification, button.nextSibling); 
    setTimeout(() => notification.remove(), 2000);
      

  
    }


    
