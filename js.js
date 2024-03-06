<script>
// Инициализация массивов для хранения данных о персонале и домиках
let staffMembers = [];
let houses = [];

function addStaff() {
    const staffDiv = document.getElementById('staff');
    const newStaff = document.createElement('div');
    newStaff.innerHTML = `
        Тип персонала: <input type="text" name="staffType">
        Количество: <input type="number" name="staffCount" min="1">
        Зарплата: <input type="number" name="staffSalary" min="0"> <br/>
    `;
    staffDiv.appendChild(newStaff);
}

function addHouse() {
    const housesDiv = document.getElementById('houses');
    const newHouse = document.createElement('div');
    newHouse.innerHTML = `
        Название домика: <input type="text" name="houseName">
        <button type="button" onclick="addDevice(this)">Добавить прибор</button>
        <div class="devices"></div>
    `;
    housesDiv.appendChild(newHouse);
}

function addDevice(element) {
    const devicesDiv = element.nextElementSibling;
    const newDevice = document.createElement('div');
    newDevice.innerHTML = `
        Прибор: <input type="text" name="deviceName">
        Расход кВт: <input type="number" name="deviceConsumption" min="0"> <br/>
    `;
    devicesDiv.appendChild(newDevice);
}

function calculate() {
    // Сбор данных о персонале
    const staffTypes = document.querySelectorAll('input[name="staffType"]');
    const staffCounts = document.querySelectorAll('input[name="staffCount"]');
    const staffSalaries = document.querySelectorAll('input[name="staffSalary"]');
    let totalSalary = 0;
    staffTypes.forEach((item, index) => {
        const count = parseInt(staffCounts[index].value) || 0;
        const salary = parseInt(staffSalaries[index].value) || 0;
        totalSalary += count * salary;
    });

    // Сбор данных о потреблении энергии
    let totalConsumption = 0;
    const devices = document.querySelectorAll('input[name="deviceConsumption"]');
    devices.forEach((device) => {
        const consumption = parseInt(device.value) || 0;
        totalConsumption += consumption; // Предполагаем, что это ежедневный расход
    });

    // Вывод результатов
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <p>Общая зарплата персонала: ${totalSalary} руб.</p>
        <p>Общий расход энергии: ${totalConsumption} кВт.</p>
    `;
}
</script>