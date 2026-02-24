let interviewList =[];
let rejectedList = [];
let jobStatus = 'all';

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

function noJobsMessage(id, containerId){
    const noJobsElement = document.getElementById(id);
     
        if(containerId.childElementCount === 0){
            containerId.appendChild(noJobsElement);
            noJobsElement.classList.remove('hidden');
        }else{
            document.getElementById(id).classList.add('hidden');
        }
     
}



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
            noJobsMessage('no-jobs', interviewContainer);
        }
        else if(id === 'all-applications'){
            allCardSection.classList.remove('hidden');
            interviewContainer.classList.add('hidden');
            rejectedContainer.classList.add('hidden');
            noJobsMessage('no-jobs', allCardSection);
        }
        else if(id === 'rejected-applications'){
            allCardSection.classList.add('hidden');
            interviewContainer.classList.add('hidden');
            rejectedContainer.classList.remove('hidden');
            noJobsMessage('no-jobs', rejectedContainer);
        }        

     if(id === 'all-applications') {
        availableJobs.innerText = allCardSection.childElementCount;
    }
    else if(id === 'interview-applications') {
        availableJobs.innerText = `${interviewList.length} Of ${allCardSection.childElementCount}`;
    }
     else if(id === 'rejected-applications') {
        availableJobs.innerText = `${rejectedList.length} Of ${allCardSection.childElementCount}`;
    }

}

  function renderInterview(){
    interviewContainer.innerHTML = '';

    for(let interview of interviewList){
     
        interviewContainer.appendChild(interview);
    }

    if(jobStatus === 'interview-applications'){
        noJobsMessage('no-jobs', interviewContainer);
    }
  }


 function renderRejected(){
    rejectedContainer.innerHTML = '';

    for(let rejected of rejectedList){
     
        rejectedContainer.appendChild(rejected);
    }

    if(jobStatus === 'rejected-applications'){
        noJobsMessage('no-jobs', rejectedContainer);
    }
  }
    


  function 