function handleDragStart(e) {
    this.style.opacity = '0.4';
  }
  
  function handleDragEnd(e) {
    this.style.opacity = '1';
  
    items.forEach(function (item) {
      item.classList.remove('over');
    });
  }
  
  function handleDragEnter(e) {
    this.classList.add('over');
  }
  
  function handleDragLeave(e) {
    this.classList.remove('over');
  }
  
  const dragStart = (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
    var limit = 1;
    var count = 0;
    
    table1.addEventListener('dragStart', function(e) {
      count++;
      if (count > limit) {
        e.preventDefault();
      }
    }); 
  }
  
  const allowDrop = (event) => {
    event.preventDefault();
    event.currentTarget.style.background = 'none';
  }
  
  const drop = (event) => {
    event.preventDefault();
    if (!event.currentTarget.querySelector('.redips-drag')) {
      const data = event.dataTransfer.getData("text/plain");
      const element = document.querySelector(`#${data}`);
      console.log(event.currentTarget)
      event.currentTarget.style.background = 'none'
      try {
        event.target.appendChild(element);
      } catch (error) {
        console.warn("you can't move the item to the same place")
      }
    }
  }
  
  
  
  let items = document.querySelectorAll('.droppable, list');
  items.forEach(function(item) {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragover', handleDragOver);
    item.addEventListener('dragenter', handleDragEnter);
    item.addEventListener('dragleave', handleDragLeave);
    item.addEventListener('dragend', handleDragEnd);
    item.addEventListener('drop', handleDrop);
  });
  
  function handleDragStart(e) {
    this.style.opacity = '0.4';
  
    dragSrcEl = this;
  
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  }
  
  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
  
    return false;
  }
  
  function handleDrop(e) {
    e.stopPropagation();
  
    if (dragSrcEl !== this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
    }
  
    return false;
  }
  function handleDrop(e) {
    e.stopPropagation(); // Препятствует перенаправлению в некоторых браузерах.
    e.preventDefault();
  
    var files = e.dataTransfer.files;
    for (var i = 0, f; f = files[i]; i > 1) {
      // Читаем объекты File в этом FileList.
    }
  }
  function handleDragStart(e) {
    this.style.opacity = '0.4';
  
    dragSrcEl = this;
  
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  }
  
  function handleDragStart(e) {
    this.style.opacity = '0.4';
  }
  
  function handleDragEnd(e) {
    this.style.opacity = '1';
  }
  
  let item = document.querySelectorAll('.container .box');
  items.forEach(function(item) {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragend', handleDragEnd);
  });
  
  var limit = 1;
  var count = 0;
  
  var cell1 = document.getElementsByClassName("drop");
  var limit = 1;
  var count = 0;
  console.log(cell1)
 