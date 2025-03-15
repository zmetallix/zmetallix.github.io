// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // 确保颜色方块样式正确
    document.querySelectorAll('.color-box').forEach(box => {
        box.style.width = '20px';
        box.style.height = '20px';
        box.style.minWidth = '20px';
        box.style.minHeight = '20px';
        box.style.maxWidth = '20px';
        box.style.maxHeight = '20px';
        box.style.padding = '0';
        box.style.display = 'inline-block';
        box.style.borderRadius = '4px';
        box.style.position = 'static';
    });
    
    // Navigation bar scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = 'white';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

    // Smooth scroll to anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Token distribution chart
    const distributionChart = document.getElementById('distributionChart');
    if (distributionChart) {
        new Chart(distributionChart, {
            type: 'doughnut',
            data: {
                labels: ['Development Team', 'Market Circulation', 'Community & Incentives', 'Marketing Operations', 'Mining Reserve'],
                datasets: [{
                    data: [30, 30, 20, 15, 5],
                    backgroundColor: [
                        '#3498db', // Development Team - 蓝色
                        '#f39c12', // Market Circulation - 橙色
                        '#9b59b6', // Community & Incentives - 紫色
                        '#2ecc71', // Marketing Operations - 绿色
                        '#e74c3c'  // Mining Reserve - 红色
                    ],
                    borderWidth: 0,
                    borderRadius: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '60%',
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.raw || 0;
                                const total = context.dataset.data.reduce((acc, data) => acc + data, 0);
                                const percentage = Math.round((value / total) * 100);
                                return `${label}: ${percentage}% (${value === 30 ? '3,000,000' : value === 20 ? '2,000,000' : value === 15 ? '1,500,000' : value === 5 ? '500,000' : '0'} MTX)`;
                            }
                        }
                    }
                },
                layout: {
                    padding: 20
                },
                elements: {
                    arc: {
                        borderWidth: 0
                    }
                }
            }
        });
    }

    // Animation effects
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.project-item, .team-member, .roadmap-item, .contact-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial setup
    document.querySelectorAll('.project-item, .team-member, .roadmap-item, .contact-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Listen for scroll events
    window.addEventListener('scroll', animateOnScroll);
    
    // Trigger once initially
    animateOnScroll();
}); 