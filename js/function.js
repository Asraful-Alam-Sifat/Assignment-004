let interviewList =[];
let rejectedList = [];
let jobStatus = 'applid';

let totalCount = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');

const allBtn = document.getElementById('all-applications');
const interviewBtn = document.getElementById('interview-applications');
const rejectedBtn = document.getElementById('rejected-applications');

const allCardSection = document.getElementById('all-container');
const mainContainer = document.getElementById('all-jobs-container');
const interviewContainer = document.getElementById('interview-container');
const rejectedContainer = document.getElementById('rejected-container');

const availableJobs = document.getElementById('available-jobs-count');
availableJobs.innerText = allCardSection.childElementCount;


function Counter(){
    totalCount.innerText = allCardSection.childElementCount;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
Counter();

function noJobsMessage(id){
    if(allCardSection.childElementCount === 0){
        document.getElementById(id).classList.remove('hidden');
    } else {
        document.getElementById(id).classList.add('hidden');
    }
}

noJobsMessage('no-jobs');

function toggleStyle(id){
        const btns = ['all-applications', 'interview-applications', 'rejected-applications'];

          for(let btn of btns){
              const button = document.getElementById(btn);
            if(btn === id){
                button.classList.add('bg-primary', 'text-white');

            }else{
                button.classList.remove('bg-primary', 'text-white');
                button.classList.add('bg-base-100', 'text-(--secondary-text-color)', 'border-2', 'border-gray-200');
            }
        }

jobStatus = id;

        if(id === 'interview-applications'){
            allCardSection.classList.add('hidden');
            interviewContainer.classList.remove('hidden');
            rejectedContainer.classList.add('hidden');
        }else if(id === 'all-applications'){
            allCardSection.classList.remove('hidden');
            interviewContainer.classList.add('hidden');
            rejectedContainer.classList.add('hidden');
        }else if(id === 'rejected-applications'){
            allCardSection.classList.add('hidden');
            interviewContainer.classList.add('hidden');
            rejectedContainer.classList.remove('hidden');
        }

        const availableCards = allCardSection.childElementCount;
        const interviewCards = interviewList.length;
        const rejectedCards = rejectedList.length;

     if(id === 'all-applications') {
        availableJobs.innerText = availableCards;
    }
    else if(id === 'interview-applications') {
        availableJobs.innerText = `${interviewCards} Of ${availableCards}`;
    }
     else if(id === 'rejected-applications') {
        availableJobs.innerText = `${rejectedCards} Of ${availableCards}`;
    }

}


 mainContainer.addEventListener('click', function(event) {

      if(event.target.classList.contains('interview-btn')){
        const parentCard = event.target.parentNode.parentNode;
          const jobTitle = parentCard.querySelector('.job-title').innerText;

          const jobExist = interviewList.find(item=> item.querySelector('.job-title').innerText === jobTitle)

const statusBadge = parentCard.querySelectorAll('.status-badge');
    for(let badge of statusBadge){
        badge.innerText = 'INTERVIEW';
        badge.classList.remove('bg-[#eef4ff]', 'text-(--primary-text-color)','border-2', 'border-red-500', 'bg-red-200', 'font-bold', 'text-center', 'text-red-600');
        badge.classList.add('border-2', 'border-green-500', 'bg-green-200', 'font-bold', 'text-center', 'text-green-600');
    }

              if(!jobExist){
                const cloneApplication = parentCard.cloneNode(true);
                interviewList.push(cloneApplication);
              }

              rejectedList = rejectedList.filter(item=> item.querySelector('.job-title').innerText !== jobTitle);
              if(jobStatus === 'rejected-applications'){
                renderRejected();
              }

          Counter();
          renderInterview();
    }

    else if(event.target.classList.contains('rejected-btn')){
        const parentCard = event.target.parentNode.parentNode;
          const jobTitle = parentCard.querySelector('.job-title').innerText;

          const jobExist = rejectedList.find(item=> item.querySelector('.job-title').innerText === jobTitle)

            const statusBadge = parentCard.querySelectorAll('.status-badge');
            for(let badge of statusBadge){
            badge.innerText = 'REJECTED';
            badge.classList.remove('bg-[#eef4ff]', 'text-(--primary-text-color)');
            badge.classList.add('border-2', 'border-red-500', 'bg-red-200', 'font-bold', 'text-center', 'text-red-600');
            }

              if(!jobExist){
                const cloneApplication = parentCard.cloneNode(true);
                rejectedList.push(cloneApplication);
              
              }

              interviewList = interviewList.filter(item=> item.querySelector('.job-title').innerText !== jobTitle);
              if(jobStatus === 'interview-applications'){
                renderInterview();
              }

          Counter();

          renderRejected();
    }
  })




  function renderInterview(){
    interviewContainer.innerHTML = '';

    for(let interview of interviewList){
     
        interviewContainer.appendChild(interview);
    }
  }


 function renderRejected(){
    rejectedContainer.innerHTML = '';

    for(let rejected of rejectedList){
     
        rejectedContainer.appendChild(rejected);
    }
  }
    