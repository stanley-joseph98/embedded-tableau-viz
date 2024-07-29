const vizContainer1 = document.getElementById("vizContainer1");
const url1 =
  "https://public.tableau.com/views/IPPF_Dashboard/bubble_chart_fpmethods?";

const options = {
  device: "desktop",
  height: 800,
  width: 1000
};

let viz1;

function initViz1() {
  viz1 = new tableau.Viz(vizContainer1, url1, options);
}

document.addEventListener("DOMContentLoaded", initViz1);



  const vizContainer3 = document.getElementById("vizContainer3");
const url3 =
  "https://public.tableau.com/views/IPPF_Dashboard/bar_chart_age_groups?";

  let viz3;

  function initViz3() {
    viz3 = new tableau.Viz(vizContainer3, url3, options);
  }
  
  document.addEventListener("DOMContentLoaded", initViz3);



const vizContainer4 = document.getElementById("vizContainer4");
const url4 =
  "https://public.tableau.com/views/IPPF_Dashboard/bar_chart_marital_status?";

  let viz4;

  function initViz4() {
    viz4 = new tableau.Viz(vizContainer4, url4, options);
  }
  
  document.addEventListener("DOMContentLoaded", initViz4);



  const vizContainer5 = document.getElementById("vizContainer5");
const url5 =
  "https://public.tableau.com/views/IPPF_Dashboard/pie_chart?";

  let viz5;

  function initViz5() {
    viz5 = new tableau.Viz(vizContainer5, url5, options);
  }
  
  document.addEventListener("DOMContentLoaded", initViz5);



const vizContainer6 = document.getElementById("vizContainer6");
const url6 =
  "https://public.tableau.com/views/IPPF_Dashboard/heatmaps_edu_level?";

  let viz6;

  function initViz6() {
    viz6 = new tableau.Viz(vizContainer6, url6, options);
  }
  
  document.addEventListener("DOMContentLoaded", initViz6);


  const vizContainer7 = document.getElementById("vizContainer7");
const url7 =
  "https://public.tableau.com/views/IPPF_Dashboard/family_planning_comparison?";

  let viz7;

  function initViz7() {
    viz7 = new tableau.Viz(vizContainer7, url7, options);
  }
  
  document.addEventListener("DOMContentLoaded", initViz7);

  const vizContainer2 = document.getElementById("vizContainer2");
const url2 =
  "https://public.tableau.com/views/IPPF_Dashboard/Dashboard?";

  let viz2;

  function initViz2() {
    viz2 = new tableau.Viz(vizContainer2, url2, options);
  }
  
  document.addEventListener("DOMContentLoaded", initViz2);


const exportButton = document.getElementById("exportButton");

function exportFunc() {
  viz1.showExportPDFDialog();
  
}

// showExportPowerPointDialog()
// showExportImageDialog()
// showExportCrossTabDialog()

exportButton.addEventListener("click", exportFunc);



function exportFunc2() {
  
  viz2.showExportPDFDialog();
  
}

// showExportPowerPointDialog()
// showExportImageDialog()
// showExportCrossTabDialog()

exportButton2.addEventListener("click", exportFunc2);


function exportFunc3() {
 
  viz3.showExportPDFDialog();
  
}

// showExportPowerPointDialog()
// showExportImageDialog()
// showExportCrossTabDialog()

exportButton3.addEventListener("click", exportFunc3);


function exportFunc4() {
  
  viz4.showExportPDFDialog();
  
}

// showExportPowerPointDialog()
// showExportImageDialog()
// showExportCrossTabDialog()

exportButton4.addEventListener("click", exportFunc4);

function exportFunc5() {
  
  viz5.showExportPDFDialog();
  
}

// showExportPowerPointDialog()
// showExportImageDialog()
// showExportCrossTabDialog()

exportButton5.addEventListener("click", exportFunc5);

function exportFunc6() {
  
  viz6.showExportPDFDialog();
  
}

// showExportPowerPointDialog()
// showExportImageDialog()
// showExportCrossTabDialog()

exportButton6.addEventListener("click", exportFunc6);


function exportFunc7() {
  
  viz7.showExportPDFDialog();
}

// showExportPowerPointDialog()
// showExportImageDialog()
// showExportCrossTabDialog()

exportButton7.addEventListener("click", exportFunc7);



// loop over all the buttons

document.querySelectorAll(".filter").forEach(filter => {
  console.log(filter);
  filter.addEventListener("click", e => singleFilter(e.target.value));
});

// function to filter the dashboard to the selected region

function singleFilter(value) {
  const sheetToFilter = viz1
    .getWorkbook()
    .getActiveSheet()
    .getWorksheets()
    .get("bubble_chart_fpmethods");

  console.log(value);

  sheetToFilter.applyFilterAsync(
    "family_planning_method",
    value,
    tableau.FilterUpdateType.REPLACE
  );
}

function bubble1() {
  // Create the paragraph element
  const paragraph = document.createElement('p');
  paragraph.textContent = "Understanding 'Injectable Contraception': Injectable contraception stands at 267, forming the highest proportion of the family planning method used. This can be attributed to the duration it takes to go for another injection being long, hence participants may prefer it.";

  // Assuming you have a div with the id "vizContainer1" to hold the visualization
  const vizContainer = document.getElementById("vizContainer1");

  // Append the paragraph to the vizContainer
  vizContainer.appendChild(paragraph);
}
