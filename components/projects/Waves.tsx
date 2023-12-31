import '@/styles/waves.css'

const Waves = () => {
  return (
    <svg className="waves" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
      <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
      </defs>
      <g className="parallax">
        <use href="#gentle-wave" x="48" y="0" fill="rgba(69,178,154,0.4)"/>
        <use href="#gentle-wave" x="48" y="3" fill="rgba(69,178,154,0.3)"/>
        <use href="#gentle-wave" x="48" y="5" fill="rgba(69,178,154,0.2)"/>
        <use href="#gentle-wave" x="48" y="7" fill="rgba(69,178,154,0.1)"/>
      </g>
    </svg>
  );
}
export default Waves;