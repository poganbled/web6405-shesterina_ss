class TeamRegistration {
    constructor(teamName, captainEmail, playersCount, discipline, isAgreed) {
        this.teamName = teamName;
        this.captainEmail = captainEmail;
        this.playersCount = playersCount;
        this.discipline = discipline;
        this.isAgreed = isAgreed;
        this.createdAt = new Date().toLocaleString('ru-RU');
    }

    logFormatted() {
        console.group('Новая заявка в Интеллектуальный клуб SSAU');
        console.log(`Команда: ${this.teamName}`);
        console.log(`Email капитана: ${this.captainEmail}`);
        console.log(`Состав: ${this.playersCount} человек`);
        console.log(`Дисциплина: ${this.discipline}`);
        console.log(`Согласие на обработку ПД: ${this.isAgreed ? 'Да' : 'Нет'}`);
        console.log(`Время подачи: ${this.createdAt}`);
        console.groupEnd();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('team-form');
    const statusText = document.getElementById('form-status');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const teamName = document.getElementById('teamName').value.trim();
        const captainEmail = document.getElementById('captainEmail').value.trim();
        const playersCount = Number(document.getElementById('playersCount').value);
        const discipline = document.getElementById('discipline').value;
        const isAgreed = document.getElementById('consent').checked;

        const registration = new TeamRegistration(
            teamName,
            captainEmail,
            playersCount,
            discipline,
            isAgreed
        );

        registration.logFormatted();
        statusText.textContent = `Заявка команды «${registration.teamName}» успешно отправлена!`;
        form.reset();
    });
});
