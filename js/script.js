

 mainContainer.addEventListener('click', function(event) {

      if(event.target.classList.contains('interview-btn')){
        const parentCard = event.target.closest('.applications-card');
          const jobTitle = parentCard.querySelector('.job-title').innerText;

          const jobExist = interviewList.find(item=> item.querySelector('.job-title').innerText === jobTitle)
;
              if(!jobExist){
                const cloneApplication = parentCard.cloneNode(true);

const statusBadge = cloneApplication.querySelectorAll('.status-badge');
    for(let badge of statusBadge){
        badge.innerText = 'INTERVIEW';
        badge.classList.remove('bg-[#eef4ff]', 'text-(--primary-text-color)','border-2', 'border-red-500', 'bg-red-200', 'font-bold', 'text-center', 'text-red-600');
        badge.classList.add('border-2', 'border-green-500', 'bg-green-200', 'font-bold', 'text-center', 'text-green-600');
    }

                interviewList.push(cloneApplication);
              }

const statusBadge = parentCard.querySelectorAll('.status-badge');
    for(let badge of statusBadge){
        badge.innerText = 'INTERVIEW';
        badge.classList.remove('bg-[#eef4ff]', 'text-(--primary-text-color)','border-2', 'border-red-500', 'bg-red-200', 'font-bold', 'text-center', 'text-red-600');
        badge.classList.add('border-2', 'border-green-500', 'bg-green-200', 'font-bold', 'text-center', 'text-green-600');
    }



              rejectedList = rejectedList.filter(item=> item.querySelector('.job-title').innerText !== jobTitle);
              if(jobStatus === 'rejected-applications'){
                renderRejected();
              }

          Counter();
          renderInterview();
    }

    else if(event.target.classList.contains('rejected-btn')){
        const parentCard = event.target.closest('.applications-card');
          const jobTitle = parentCard.querySelector('.job-title').innerText;

          const jobExist = rejectedList.find(item=> item.querySelector('.job-title').innerText === jobTitle)


              if(!jobExist){
                const cloneApplication = parentCard.cloneNode(true);

    const statusBadge = cloneApplication.querySelectorAll('.status-badge');
         for(let badge of statusBadge){
            badge.innerText = 'REJECTED';
            badge.classList.remove('bg-[#eef4ff]', 'text-(--primary-text-color)');
            badge.classList.add('border-2', 'border-red-500', 'bg-red-200', 'font-bold', 'text-center', 'text-red-600');
            }                

                rejectedList.push(cloneApplication);
              
              }

    const statusBadge = parentCard.querySelectorAll('.status-badge');
         for(let badge of statusBadge){
            badge.innerText = 'REJECTED';
            badge.classList.remove('bg-[#eef4ff]', 'text-(--primary-text-color)');
            badge.classList.add('border-2', 'border-red-500', 'bg-red-200', 'font-bold', 'text-center', 'text-red-600');
            }   


              interviewList = interviewList.filter(item=> item.querySelector('.job-title').innerText !== jobTitle);
              if(jobStatus === 'interview-applications'){
                renderInterview();
              }

          Counter();

          renderRejected();
    }

    else if(event.target.classList.contains('delet-icon')){
        const parentCard = event.target.closest('.applications-card');
        const jobTitle =parentCard.querySelector('.job-title').innerText;

        if(jobStatus === 'interview-applications'){
            alert('Delete This Application from Interview');
            interviewList = interviewList.filter(item=> item.querySelector('.job-title').innerText !== jobTitle);
            renderInterview();
        }

        else if(jobStatus === 'rejected-applications'){
            alert('Delete This Application from Rejected');
            rejectedList = rejectedList.filter(item=> item.querySelector('.job-title').innerText !== jobTitle);
            renderRejected();
        }
    }
  })



