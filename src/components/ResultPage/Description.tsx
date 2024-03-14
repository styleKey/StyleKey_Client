import * as R from './styles/ResultPage.style';
interface DescriptionProps {
  stylePoint?: string;
  details?: string[];
}

const Description: React.FC<DescriptionProps> = ({ stylePoint, details }) => {
  return (
    <R.ContentsBox>
      <R.Title $fontSize={18} $fontWeight={700} $marginBottom={25}>
        변화에 민감하고 개성을 추구하는 "{stylePoint}"
      </R.Title>
      <R.Line />
      <div style={{ marginTop: '20px' }}>
        <ul>
          {details?.map((detail, index) => (
            <R.ListItem key={index}>{detail}</R.ListItem>
          ))}
        </ul>
      </div>
    </R.ContentsBox>
  );
};

export default Description;
