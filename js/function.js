let interviewList =[];
let rejectedList = [];

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



function Counter(){
    totalCount.innerText = allCardSection.childElementCount;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
Counter();


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


        if(id === 'interview-applications'){
            allCardSection.classList.add('hidden');
            interviewContainer.classList.remove('hidden');
            // rejectedContainer.classList.add('hidden');
        }else if(id === 'all-applications'){
            allCardSection.classList.remove('hidden');
            interviewContainer.classList.add('hidden');
        }

}


