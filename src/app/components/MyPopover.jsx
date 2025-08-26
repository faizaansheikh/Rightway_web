import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Nav from 'react-bootstrap/Nav';

function MyPopover(props) {
  const { elem } = props
  return (
    <>
      {['bottom'].map((placement) => (
        <OverlayTrigger
          trigger="click"
          rootClose={true}
          key={placement}
          placement={placement}
          style={{dispaly:'flex',alignItems:'center'}}
          overlay={
            <Popover id={`popover-positioned-${placement}`}   style={{ width: '600px', maxWidth: 'none' }}  className='bg-[red] h-[auto] overflow-y-auto w-[600px]'>
              {/* <Popover.Header as="h3">{`Popover ${placement}`}</Popover.Header> */}
              <Popover.Body >
                {elem.body}
            
              </Popover.Body>
            </Popover>
          }
        >
          <div className='flex justify-between items-center px-3 text-[10px] lg:text-[12px] cursor-pointer' > {elem.label}</div>
        </OverlayTrigger>
      ))}
    </>
  );
}

export default MyPopover;