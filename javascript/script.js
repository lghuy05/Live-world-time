const countrySelect = document.getElementById('country');
const timeDisplay = document.getElementById('time-display');
const timezones = {
  "Viet Nam": "Asia/Ho_Chi_Minh",
  "United States": "America/New_York",
  "Japan": "Asia/Tokyo",
  "China": "Asia/Shanghai",
  "United Kingdom": "Europe/London",
  "Australia": "Australia/Sydney",
  "India": "Asia/Kolkata",
  "Brazil": "America/Sao_Paulo"
};

const flags = {
  "Viet Nam": "🇻🇳",
  "United States": "🇺🇸",
  "Japan": "🇯🇵",
  "China": "🇨🇳",
  "United Kingdom": "🇬🇧",
  "Australia": "🇦🇺",
  "India": "🇮🇳",
  "Brazil": "🇧🇷"
};

// colorSelect.addEventListener('change', function() {
//   const selectedValue = this.value;

//   const selectedText = this.options[this.selectedIndex].text;

//   if (selectedValue) {
//     result.innerHTML = `You selected: <strong>${selectedText}</strong><br>Value: <strong>${selectedValue}</strong>`;
//     result.style.color = selectedValue;
//   } else {
//     result.innerHTML = 'Please select a color from the dropdown.';
//     result.style.color = '#333';
//   }
// });

function updateTime() {
  if (countrySelect.value) {
    // Map countries to timezones
    // const timeZones = {
    //   'Viet Nam': 'Asia/Ho_Chi_Minh',
    //   'United State': 'America/New_York', // or other US timezones
    //   'Japan': 'Asia/Tokyo',
    //   'China': 'Asia/Shanghai'
    // };
    
    const timeZone = timezones[countrySelect.value];
    
    if (timeZone) {
      const options = {
        timeZone: timeZone,
        hour12: true, // or false for 24-hour format
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      };
      
      const formatter = new Intl.DateTimeFormat('en-US', options);
      const currentTime = formatter.format(new Date());
      
      timeDisplay.innerHTML = `
        <p>${flags[countrySelect.value]} Time in ${countrySelect.value}:</p>
        <p style="font-size: 32px; font-weight: bold;">${currentTime}</p>
      `;
    }
  }
}
countrySelect.addEventListener('change', updateTime);

updateTime();
setInterval(updateTime, 1000);