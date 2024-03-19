import * as R from './styles/ResultPage.style';
interface DescriptionProps {
  styledetailLines?: string[];
  stylePoint?: string;
  details?: string[];
}

const Description: React.FC<DescriptionProps> = ({
  styledetailLines,
  stylePoint,
  details,
}) => {
  return (
    <R.ContentsBox>
      <R.Title>
        {styledetailLines?.join(' ')} "{stylePoint}"
      </R.Title>
      <R.Line />
      <R.ListItemContainer>
        <div style={{ marginTop: '20px' }}>
          <ul>
            {details?.map((detail, index) => (
              <R.ListItem key={index}>{detail}</R.ListItem>
            ))}
          </ul>
        </div>
      </R.ListItemContainer>
    </R.ContentsBox>
  );
};

export default Description;
