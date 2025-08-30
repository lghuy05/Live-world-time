const colorSelect = document.getElementById('country');
const result = document.getElementById('time-display');
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

colorSelect.addEventListener('change', function() {
  const selectedValue = this.value;

  const selectedText = this.options[this.selectedIndex].text;

  if (selectedValue) {
    result.innerHTML = `You selected: <strong>${selectedText}</strong><br>Value: <strong>${selectedValue}</strong>`;
    result.style.color = selectedValue;
  } else {
    result.innerHTML = 'Please select a color from the dropdown.';
    result.style.color = '#333';
  }
});
