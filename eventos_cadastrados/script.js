const events = [
    {
        type: 'Conferência',
        typeSlug: 'conferencia',
        title: 'Conferência de Tecnologia 2025',
        date: '15 de Janeiro de 2025, 09:00 - 18:00',
        dateShort: '15 de Janeiro de 2025, 09:00',
        location: 'Centro de Convenções - São Paulo, SP',
        locationFull: 'Centro de Convenções - São Paulo, SP - Av. Paulista, 1000',
        audience: 'Desenvolvedores e Profissionais de TI',
        coordinator: 'Maria Costa',
        coordinatorEmail: 'maria.costa@email.com',
        description: 'Uma conferência completa sobre as últimas tendências em tecnologia, incluindo IA, Cloud Computing e desenvolvimento web. Palestrantes renomados do mercado compartilharão suas experiências.',
        descriptionFull: 'Uma conferência completa sobre as últimas tendências em tecnologia, incluindo IA, Cloud Computing e desenvolvimento web. Palestrantes renomados do mercado compartilharão suas experiências e conhecimentos. O evento contará com workshops práticos, networking e exposição de produtos e serviços inovadores.',
        status: 'upcoming',
        statusText: 'Em breve'
    },
    {
        type: 'Workshop',
        typeSlug: 'workshop',
        title: 'Workshop de UX/UI Design',
        date: '10 de Dezembro de 2024, 14:00 - 18:00',
        dateShort: '10 de Dezembro de 2024, 14:00',
        location: 'Espaço Coworking - Rio de Janeiro, RJ',
        locationFull: 'Espaço Coworking - Rio de Janeiro, RJ - Rua das Laranjeiras, 500',
        audience: 'Designers e Entusiastas',
        coordinator: 'João Silva',
        coordinatorEmail: 'joao.silva@email.com',
        description: 'Workshop prático focado em design de interfaces e experiência do usuário. Aprenda as melhores práticas e ferramentas mais utilizadas no mercado.',
        descriptionFull: 'Workshop prático focado em design de interfaces e experiência do usuário. Aprenda as melhores práticas e ferramentas mais utilizadas no mercado. Incluindo Figma, Adobe XD e prototipação rápida. Material didático incluso e certificado de participação.',
        status: 'active',
        statusText: 'Em andamento'
    },
    {
        type: 'Seminário',
        typeSlug: 'seminario',
        title: 'Seminário de Marketing Digital',
        date: '20 de Novembro de 2024, 10:00 - 17:00',
        dateShort: '20 de Novembro de 2024, 10:00',
        location: 'Auditório Business Center - Belo Horizonte, MG',
        locationFull: 'Auditório Business Center - Belo Horizonte, MG - Av. Afonso Pena, 3000',
        audience: 'Empresários e Profissionais de Marketing',
        coordinator: 'Ana Santos',
        coordinatorEmail: 'ana.santos@email.com',
        description: 'Seminário focado em estratégias de marketing digital, SEO, redes sociais e análise de métricas. Casos de sucesso e tendências do mercado.',
        descriptionFull: 'Seminário focado em estratégias de marketing digital, SEO, redes sociais e análise de métricas. Casos de sucesso e tendências do mercado. Palestrantes especializados compartilharão táticas comprovadas para aumentar o ROI de campanhas digitais.',
        status: 'finished',
        statusText: 'Finalizado'
    },
    {
        type: 'Palestra',
        typeSlug: 'palestra',
        title: 'Palestra sobre Inteligência Artificial',
        date: '05 de Fevereiro de 2025, 19:00 - 21:00',
        dateShort: '05 de Fevereiro de 2025, 19:00',
        location: 'Auditório IFPA - Belém, PA',
        locationFull: 'Auditório IFPA Campus Belém - Belém, PA - Av. Almirante Barroso, 1155',
        audience: 'Estudantes e Profissionais de Tecnologia',
        coordinator: 'Prof. Carlos Oliveira',
        coordinatorEmail: 'carlos.oliveira@ifpa.edu.br',
        description: 'Palestra sobre os avanços recentes em Inteligência Artificial e Machine Learning, com foco em aplicações práticas e mercado de trabalho.',
        descriptionFull: 'Palestra sobre os avanços recentes em Inteligência Artificial e Machine Learning, com foco em aplicações práticas e mercado de trabalho. Discussão sobre ética em IA e oportunidades de carreira na área.',
        status: 'upcoming',
        statusText: 'Em breve'
    }
];

function renderEvents(eventsToRender) {
    const grid = document.getElementById('eventsGrid');
    const noResults = document.getElementById('noResults');

    if (eventsToRender.length === 0) {
        grid.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';
    grid.innerHTML = eventsToRender.map((event, index) => `
                <div class="event-card" onclick="openModal(${events.indexOf(event)})">
                    <div class="event-header" style="position: relative;">
                        <span class="status-badge status-${event.status}">${event.statusText}</span>
                        <span class="event-type">${event.type}</span>
                        <h3 class="event-title">${event.title}</h3>
                    </div>
                    <div class="event-body">
                        <div class="event-info">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>
                            <span>${event.dateShort}</span>
                        </div>
                        <div class="event-info">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            <span>${event.location}</span>
                        </div>
                        <div class="event-info">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                            </svg>
                            <span>${event.audience}</span>
                        </div>
                        <p class="event-description">
                            ${event.description}
                        </p>
                        <div class="event-footer">
                            <div class="coordinator">
                                <div class="coordinator-avatar">${event.coordinator.split(' ').map(n => n[0]).join('')}</div>
                                <span>${event.coordinator}</span>
                            </div>
                            <button class="btn-details">Ver detalhes</button>
                        </div>
                    </div>
                </div>
            `).join('');
}

function filterEvents() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const typeFilter = document.getElementById('typeFilter').value;
    const statusFilter = document.getElementById('statusFilter').value;

    const filtered = events.filter(event => {
        // Filtro de busca por texto
        const matchesSearch =
            event.title.toLowerCase().includes(searchTerm) ||
            event.description.toLowerCase().includes(searchTerm) ||
            event.location.toLowerCase().includes(searchTerm) ||
            event.audience.toLowerCase().includes(searchTerm) ||
            event.coordinator.toLowerCase().includes(searchTerm);

        // Filtro por tipo
        const matchesType = !typeFilter || event.typeSlug === typeFilter;

        // Filtro por status
        const matchesStatus = !statusFilter || event.status === statusFilter;

        return matchesSearch && matchesType && matchesStatus;
    });

    renderEvents(filtered);
}

function openModal(index) {
    const event = events[index];
    document.getElementById('modalType').textContent = event.type;
    document.getElementById('modalTitle').textContent = event.title;
    document.getElementById('modalDate').textContent = event.date;
    document.getElementById('modalLocation').textContent = event.locationFull;
    document.getElementById('modalAudience').textContent = event.audience;
    document.getElementById('modalCoordinator').textContent = `${event.coordinator} (${event.coordinatorEmail})`;
    document.getElementById('modalDescription').textContent = event.descriptionFull;

    document.getElementById('eventModal').classList.add('active');
}

function closeModal() {
    document.getElementById('eventModal').classList.remove('active');
}

function closeModalOnBackdrop(event) {
    if (event.target.id === 'eventModal') {
        closeModal();
    }
}

// Fechar modal com tecla ESC
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Renderizar todos os eventos ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
    renderEvents(events);
});