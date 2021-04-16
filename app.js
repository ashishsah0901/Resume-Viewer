const data = [{
        name: "Ashish Sah",
        age: 20,
        city: "Nagpur",
        languages: "Python",
        framework: "Django",
        image: "https://randomuser.me/api/portraits/men/91.jpg"
    },
    {
        name: "Anmol Sah",
        age: 22,
        city: "Nagpur",
        languages: "Java",
        framework: "React JS",
        image: "https://randomuser.me/api/portraits/men/38.jpg"
    },
    {
        name: "Rohini Gupta",
        age: 25,
        city: "Pune",
        languages: "C++",
        framework: "Angular JS",
        image: "https://randomuser.me/api/portraits/women/63.jpg"
    },
    {
        name: "Anuradha Sah",
        age: 50,
        city: "Bangalore",
        languages: "Javascript",
        framework: "Flask",
        image: "https://randomuser.me/api/portraits/women/49.jpg"
    },
]

function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function() {
            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true }
        }
    }
}
const candidate = cvIterator(data);
nextCV();
const next = document.getElementById('next');
next.addEventListener('click', nextCV);

function nextCV() {
    const currentCandidate = candidate.next().value;
    let image = document.getElementById('image')
    let proifile = document.getElementById('profile');
    if (currentCandidate != undefined) {
        image.innerHTML = `<img src='${currentCandidate.image}'>`;
        proifile.innerHTML = `<ul class='list-group'>
        <li class='list-group-item'>Name: ${currentCandidate.name}</li>
        <li class='list-group-item'>Age: ${currentCandidate.age}</li>
        <li class='list-group-item'>Place: ${currentCandidate.city}</li>
        <li class='list-group-item'>Language: ${currentCandidate.languages}</li>
        <li class='list-group-item'>Framework: ${currentCandidate.framework}</li>
    </ul>`;
    } else {
        alert('End of application');
        window.location.reload();
    }
}