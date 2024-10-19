export const ProgressBar = ({ step }: { step: number }) => {
    const radius = 50;
    const stroke = 5;
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const progress = step / 5;
    const strokeDashoffset = circumference - progress * circumference;
  
    return (
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#EEF7FB"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#AADDF3"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + " " + circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          transform={`rotate(-90 ${radius} ${radius})`}
        />
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
          {step}/{5}
        </text>
      </svg>
    );
  };
  
  export default ProgressBar;
  