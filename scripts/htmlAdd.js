// 1. Imports
import videoObj, { embedVid } from './list.js';
import { saveToLocalStorage, loadFromLocalStorage } from './storageFunc.js';


// Load saved data, or use the default videoObj if nothing is saved yet
const savedData = loadFromLocalStorage();
const vidInfo = savedData ? savedData : videoObj;

const vidEmbeds = embedVid;

// 2. The Dynamic Template Function for Progress
const generateProgressTemplate = (data) => {
    const total = data.length;
    const completedCount = data.filter(video => video.complete).length;
    const percentage = total === 0 ? 0 : Math.round((completedCount / total) * 100);

    return `
        <div class="progress-container">
            <h3>Monthly Progress</h3>
            <div class="progress-bar-bg">
                <div id="progress-fill" 
                     class="progress-fill" 
                     style="width: ${percentage}%">
                </div>
            </div>
            <p id="progress-text">${percentage}% Completed (${completedCount}/${total})</p>
        </div>
    `;
};

// 3. Function to Refresh Progress UI
const renderProgress = () => {
    const progressWrapper = document.getElementById('progress-wrapper');
    if (progressWrapper) {
        progressWrapper.innerHTML = generateProgressTemplate(vidInfo);
    }
};

// 4. Generate Video Cards HTML
// NOTE: Added class="status-text" to the <p> tag below!
let htmlContent = vidInfo.map((video, index) => {
    return ` 
        <div class="card">
            <div>
                <iframe src="${vidEmbeds[index]}" 
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        class="video-container"></iframe>
            </div>
            <div>
                <h1>${video.title}</h1>
                <p class="status-text">Status: ${video.complete ? "Completed" : "Pending"}</p>
                <div>
                <a href="${video.url}" target="_blank" class="btn">Visit</a>
                </div>
                <fieldset>
                    <legend>Completion</legend>
                    <div class="radio-align">
                        <div>
                            <input type="radio" 
                                   id="pending-${index}" 
                                   class="pending" 
                                   value="pending" 
                                   name="status-${index}" 
                                   ${!video.complete ? "checked" : ""}/>
                            <label for="pending-${index}">Pending</label>
                        </div>
                        <div>
                            <input type="radio" 
                                   id="completed-${index}" 
                                   class="completed" 
                                   value="completed" 
                                   name="status-${index}"
                                   ${video.complete ? "checked" : ""}/>
                            <label for="completed-${index}">Completed</label>
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>`;
}).join('');

// 5. Initial Injection into DOM
const docSection = document.getElementById("doc1");
if (docSection) {
    docSection.innerHTML = htmlContent;
}

// Render the progress bar for the first time
renderProgress();

// 6. Event Listener for Changes
docSection.addEventListener('change', (event) => {
    if (event.target.type === 'radio') {
        const index = parseInt(event.target.name.split('-')[1]);

        // 1. Update the data object
        vidInfo[index].complete = (event.target.value === 'completed');

        // 2. SAVE to LocalStorage
        saveToLocalStorage(vidInfo);

        // 3. Update the UI
        renderProgress();
        const card = event.target.closest('.card');
        const statusPara = card.querySelector('.status-text');
        if (statusPara) {
            statusPara.innerText = vidInfo[index].complete ? "Status: Completed" : "Status: Pending";
        }
    }
});