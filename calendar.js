document.addEventListener('DOMContentLoaded', function () {
    const calendarBody = document.querySelector('#calendar tbody');
    const currentMonthYear = document.getElementById('current-month-year');
    let currentDate = new Date();
    const today = new Date();

    const redDates = [
        '2024-05-10',
        '2024-05-11',
        '2024-05-12',
        '2024-05-13',
        '2024-05-14',
        '2024-05-15',
        '2024-05-16',
        '2024-05-17',
        '2024-05-18',
        '2024-05-19',
        '2024-05-20',
        '2024-05-21',
        '2024-05-22',
        '2024-05-23',
        '2024-05-24',
        '2024-05-25',
        '2024-05-26',
        '2024-05-27',
        '2024-05-28',
        '2024-05-29',
        '2024-05-30',
        '2024-05-31',
        '2024-06-01',
        '2024-06-02',
        '2024-06-03',
        '2024-06-04',
        '2024-06-05',
        '2024-06-06',
        '2024-06-07',
        '2024-06-08',
        '2024-06-09',
        '2024-06-10',
        '2024-06-11',
        '2024-06-12',
        '2024-06-13',
        '2024-06-14',
        '2024-06-19',
        '2024-06-20',
        '2024-06-21',
        '2024-06-22',
        '2024-06-23',
        '2024-06-24',
        '2024-06-25',
        '2024-06-26',
        '2024-06-27',
        '2024-06-28',
        '2024-06-29',
        '2024-06-30',
        '2024-07-17',
        '2024-07-18',
        '2024-07-19',
        '2024-07-20',
        '2024-07-21',
        '2024-07-22',
        '2024-07-23',
        '2024-07-24',
        '2024-07-25',
        '2024-07-28',
        '2024-07-29',
        '2024-07-30',
        '2024-07-31',
        '2024-08-01',
        '2024-08-13',
        '2024-08-14',
        '2024-08-15',
        '2024-08-16',
        '2024-08-17',
        '2024-08-18',
        '2024-08-19',
        '2024-08-20',
        '2024-08-21',
        '2024-08-25',
        '2024-08-28',
        '2024-08-29',
        '2024-08-30',
        '2024-09-08',
        '2024-09-09',
        '2024-09-10',
        '2024-09-11',
        '2024-09-12',
        '2024-09-13',
        '2024-09-14',
        '2024-09-19',
        '2024-09-25',
        '2024-09-28',
        '2024-09-29',
        '2024-09-30',
        '2024-10-06',
        '2024-10-07',
        '2024-10-08',
        '2024-10-09',
        '2024-10-10',
        '2024-10-11',
        '2024-10-16',
        '2024-10-17',
        '2024-10-18',
        '2024-10-19',
        '2024-10-20',
        '2024-10-21',
        '2024-10-22',
        '2024-10-23',
        '2024-10-24',
        '2024-10-27',
        '2024-10-28',
        '2024-10-29',
        '2024-10-30',
        '2024-10-31',
        '2024-11-01',
        '2024-08-02',
        '2024-08-03',
        '2024-08-04',
        '2024-08-05',
        '2024-08-06',
        '2024-08-07',
        '2024-08-08',
        '2024-08-09',
        '2024-09-15',
        '2024-09-16',
        '2024-09-17',
        '2024-09-18',
        '2024-09-26',
        '2024-09-27',
        '2024-12-28',
        '2024-12-29',
        '2024-12-30',
        '2024-12-31',
        '2025-01-01',
        '2025-01-02',
        '2025-01-03',
        '2025-06-22',
        '2025-06-23',
        '2025-06-24',
        '2025-06-25',
        '2025-06-26',
        '2025-06-27',
        '2025-08-01',
        '2025-08-02',
        '2025-08-03',
        '2025-08-04',
        '2025-08-05',
        '2025-09-07',
        '2025-09-08',
        '2025-09-09',
        '2025-09-10',
        '2025-09-11',
        '2025-09-12',
        '2025-09-13',
        '2025-09-14',
        '2025-09-15',
        '2025-09-16',
        '2025-09-17',
        '2025-09-18',
        '2025-09-19',
        '2025-10-05',
        '2025-10-06',
        '2025-10-07',
        '2025-10-08',
        '2025-10-09',
        '2025-10-10',
        '2025-10-11',
        '2025-10-12',
        '2025-10-13',
        '2025-10-14',
        '2025-10-15',
        '2025-10-16',
        '2025-10-17',
        '2025-04-20',
        '2025-04-21',
        '2025-04-22',
        '2025-04-23',
        '2025-04-24',
        '2025-04-25',
        '2025-05-30',
        '2025-05-31',
        '2025-06-01',
        '2025-06-02',
        '2025-06-03',
        '2025-06-04',
        '2025-06-05',
        '2025-06-06',
        '2025-06-07',
        '2025-06-08',
        '2025-06-09',
        '2025-06-10',
        '2025-06-11',
        '2025-06-12',
        '2025-06-13',
        '2025-06-14',
        '2025-06-15',
        '2025-06-16',
        '2025-06-17',
        '2025-06-18',
        '2025-03-25',
        '2025-03-26',
        '2025-03-27',
        '2025-03-28',
        '2025-03-29',
        '2025-07-08',
        '2025-07-09',
        '2025-07-10',
        '2025-07-11',
        '2025-07-12',
        '2025-07-13',
         // Add more dates in 'YYYY-MM-DD' format as needed
    ];

    const redDatesStart = [
        '2025-10-04',
        '2025-09-06',
        '2025-07-31',
        '2025-06-21',
        '2024-05-09',
        '2024-06-18',
        '2024-07-16',
        '2024-07-27',
        '2024-08-12',
        '2024-08-24',
        '2024-09-07',
        '2024-09-24',
        '2024-10-05',
        '2024-10-15',
        '2024-10-26',
        '2024-12-27',
        '2025-04-19',
        '2025-05-29',
        '2025-03-24',
        '2025-07-07',        
        
        // Add more dates in 'YYYY-MM-DD' format as needed
    ];

    const redDatesEnd = [
        '2025-10-18',
        '2025-09-20',
        '2025-06-28',
        '2024-06-15',
        '2024-07-26',
        '2024-08-22',
        '2024-08-31',
        '2024-09-20',
        '2024-10-01',
        '2024-10-12',
        '2024-10-25',
        '2024-11-02',
        '2025-01-04',
        '2025-08-06',
        '2025-04-26',
        '2025-06-19',
        '2025-03-30',
        '2025-07-14',
        
        // Add more dates in 'YYYY-MM-DD' format as needed
    ];

    function generateCalendar(date) {
        calendarBody.innerHTML = '';
        const year = date.getFullYear();
        const month = date.getMonth();
        
        currentMonthYear.textContent = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

        // Adjust the first day of the month to be Monday-start
        const firstDay = (new Date(year, month, 1).getDay() + 6) % 7;
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        let row = document.createElement('tr');

        for (let i = 0; i < firstDay; i++) {
            const cell = document.createElement('td');
            row.appendChild(cell);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            if ((firstDay + day - 1) % 7 === 0 && day !== 1) {
                calendarBody.appendChild(row);
                row = document.createElement('tr');
            }
            const cell = document.createElement('td');
            const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            if (redDates.includes(dateStr)) {
                cell.classList.add('red-date');
            }
            if (redDatesStart.includes(dateStr)) {
                cell.classList.add('red-date-start');
            }
            if (redDatesEnd.includes(dateStr)) {
                cell.classList.add('red-date-end');
            }
            if (dateStr === today.toISOString().split('T')[0]) {
                cell.classList.add('green-date');
            }
            cell.textContent = day;
            row.appendChild(cell);
        }
        calendarBody.appendChild(row);
    }

    document.getElementById('prev-month').addEventListener('click', function () {
        currentDate.setMonth(currentDate.getMonth() - 1);
        generateCalendar(currentDate);
    });

    document.getElementById('next-month').addEventListener('click', function () {
        currentDate.setMonth(currentDate.getMonth() + 1);
        generateCalendar(currentDate);
    });

    document.getElementById('prev-year').addEventListener('click', function () {
        currentDate.setFullYear(currentDate.getFullYear() - 1);
        generateCalendar(currentDate);
    });

    document.getElementById('next-year').addEventListener('click', function () {
        currentDate.setFullYear(currentDate.getFullYear() + 1);
        generateCalendar(currentDate);
    });

    document.getElementById('current-date').addEventListener('click', function () {
        currentDate = new Date();
        generateCalendar(currentDate);
    });

    generateCalendar(currentDate);
});
