export default function About() {
  return (
    <section id="about" style={{padding: '96px 24px', backgroundColor: '#0a0a0a'}}>
      <div style={{maxWidth: '900px', margin: '0 auto'}}>

        <div style={{marginBottom: '64px'}}>
          <h2 style={{fontSize: '40px', fontWeight: '800', color: 'white', marginBottom: '24px', letterSpacing: '-0.02em'}}>
            About
          </h2>
          <p style={{color: '#9ca3af', fontSize: '18px', lineHeight: '1.8', marginBottom: '24px'}}>
            I spent 11 years building actuarial systems for one of the world largest insurers.
            I have seen IFRS 17 deployed across 30 countries, debugged SCR calculations before
            regulatory deadlines, and taught Python to hundreds of actuarial students.
          </p>
          <p style={{color: '#9ca3af', fontSize: '18px', lineHeight: '1.8', marginBottom: '24px'}}>
            Now I am combining this operational experience with AI — fine-tuning LLMs on
            actuarial data, building ML pricing models, and automating what used to take weeks.
          </p>
          <p style={{color: '#9ca3af', fontSize: '18px', lineHeight: '1.8'}}>
            My goal is simple: bridge the gap between actuarial science and modern technology,
            and help insurance companies navigate the complexity of IFRS 17, Solvency II and
            AI transformation.
          </p>
        </div>

        <div style={{marginBottom: '64px'}}>
          <h3 style={{fontSize: '24px', fontWeight: '700', color: 'white', marginBottom: '32px'}}>
            Experience
          </h3>
          <div style={{display: 'flex', flexDirection: 'column', gap: '32px'}}>

            <div style={{display: 'flex', gap: '24px'}}>
              <div style={{width: '2px', backgroundColor: '#00ff88', flexShrink: 0}}></div>
              <div>
                <div style={{color: '#00ff88', fontSize: '13px', fontWeight: '600', marginBottom: '4px'}}>2013 - Present</div>
                <div style={{color: 'white', fontWeight: '700', fontSize: '18px', marginBottom: '4px'}}>Senior Actuary - Transversal Coordination</div>
                <div style={{color: '#6b7280', fontSize: '14px', marginBottom: '8px'}}>BNP Paribas Cardif</div>
                <div style={{color: '#9ca3af', fontSize: '14px', lineHeight: '1.6'}}>
                  Leading actuarial coordination across IFRS 17, Solvency II and the international governance tool Condor deployed in 30+ countries.
                </div>
              </div>
            </div>

            <div style={{display: 'flex', gap: '24px'}}>
              <div style={{width: '2px', backgroundColor: '#00ff88', flexShrink: 0}}></div>
              <div>
                <div style={{color: '#00ff88', fontSize: '13px', fontWeight: '600', marginBottom: '4px'}}>2020 - Present</div>
                <div style={{color: 'white', fontWeight: '700', fontSize: '18px', marginBottom: '4px'}}>Lecturer in Python, Statistics and Probability</div>
                <div style={{color: '#6b7280', fontSize: '14px', marginBottom: '8px'}}>Sorbonne Paris 1, ESILV, IUT de Paris - Institut de Science Financiere et d Assurances</div>
                <div style={{color: '#9ca3af', fontSize: '14px', lineHeight: '1.6'}}>
                  Teaching Python, statistics and probability to actuarial students at one of France top actuarial schools.
                </div>
              </div>
            </div>

            <div style={{display: 'flex', gap: '24px'}}>
              <div style={{width: '2px', backgroundColor: '#333', flexShrink: 0}}></div>
              <div>
                <div style={{color: '#6b7280', fontSize: '13px', fontWeight: '600', marginBottom: '4px'}}>2012 - 2013</div>
                <div style={{color: 'white', fontWeight: '700', fontSize: '18px', marginBottom: '4px'}}>Actuarial Consultant</div>
                <div style={{color: '#6b7280', fontSize: '14px', marginBottom: '8px'}}>Optimind Winter</div>
                <div style={{color: '#9ca3af', fontSize: '14px', lineHeight: '1.6'}}>
                  Health and protection actuarial work for major French insurance clients.
                </div>
              </div>
            </div>

          </div>
        </div>

        <div>
          <h3 style={{fontSize: '24px', fontWeight: '700', color: 'white', marginBottom: '32px'}}>
            Education
          </h3>
          <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>

            <div style={{backgroundColor: '#111', border: '1px solid #1a1a1a', borderRadius: '12px', padding: '24px'}}>
              
              <div style={{color: 'white', fontWeight: '700', marginBottom: '4px'}}>M2 Actuarial Science - ISFA Lyon</div>
              <div style={{color: '#6b7280', fontSize: '14px'}}>
                Thesis: Discriminant variable selection for passive model point aggregation under IFRS 17
              </div>
            </div>
            <div style={{backgroundColor: '#111', border: '1px solid #1a1a1a', borderRadius: '12px', padding: '24px'}}>
              
              <div style={{color: 'white', fontWeight: '700', marginBottom: '4px'}}>Machine Learning Certification - OpenClassrooms</div>
              <div style={{color: '#6b7280', fontSize: '14px'}}>
                Applied machine learning for data science and AI
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
