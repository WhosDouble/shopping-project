import Accordion from "react-bootstrap/Accordion";

function BasicExample() {
  return (
    <>
      <h1 id="desc" className="text-center text-[50px] font-semibold">
        Your FAQ
      </h1>
      <Accordion defaultActiveKey="0" className="mt-5  ">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="font-bold ">
            01. What is your return policy?
          </Accordion.Header>
          <Accordion.Body>
            We offer a 30-day return policy from the date of delivery. Items
            must be unworn, unwashed, and in their original packaging with all
            tags attached. To initiate a return, please visit our{" "}
            <a className="font-semibold underline" href="">
              Returns Center
            </a>{" "}
            and follow the instructions.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className="font-bold ">
            02. How long does shipping take?
          </Accordion.Header>
          <Accordion.Body>
            Shipping typically takes 3-7 business days for domestic orders and
            7-14 business days for international orders. Please note that
            shipping times may vary based on your location and any unforeseen
            delays.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header className="font-bold ">
            03. What payment methods do you accept?
          </Accordion.Header>
          <Accordion.Body>
            We accept a variety of payment methods, including major credit cards
            (<span className="font-semibold">Visa</span>,{" "}
            <span className="font-semibold">MasterCard</span>,{" "}
            <span className="font-semibold">American Express</span>), PayPal,
            Apple Pay, and Google Pay. All payments are securely processed to
            ensure your information is protected.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header className="font-bold ">
            04. Do you offer discounts or promotions?
          </Accordion.Header>
          <Accordion.Body>
            Yes, we regularly offer discounts and promotions. Sign up for our
            newsletter to receive the latest updates on special offers, and
            heres a free one <span className="font-bold">$free10</span> for a
            free 10% off just for scrolling this far thank you for your
            support♥.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header className="font-bold ">
            05. Can I modify or cancel my order after it’s been placed?
          </Accordion.Header>
          <Accordion.Body>
            If you need to modify or cancel your order, please contact our{" "}
            <a className="font-semibold underline" href="#">
              customer service
            </a>{" "}
            team as soon as possible. We process orders quickly, so changes can
            only be made within a short window after the order is placed. Once
            the order has been processed or shipped, we won’t be able to make
            any modifications or cancellations.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header className="font-bold ">
            02. How long does shipping take?
          </Accordion.Header>
          <Accordion.Body>
            Shipping typically takes 3-7 business days for domestic orders and
            7-14 business days for international orders. Please note that
            shipping times may vary based on your location and any unforeseen
            delays.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header className="font-bold ">
            03. What payment methods do you accept?
          </Accordion.Header>
          <Accordion.Body>
            We accept a variety of payment methods, including major credit cards
            (<span className="font-semibold">Visa</span>,{" "}
            <span className="font-semibold">MasterCard</span>,{" "}
            <span className="font-semibold">American Express</span>), PayPal,
            Apple Pay, and Google Pay. All payments are securely processed to
            ensure your information is protected.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header className="font-bold ">
            04. Do you offer discounts or promotions?
          </Accordion.Header>
          <Accordion.Body>
            Yes, we regularly offer discounts and promotions. Sign up for our
            newsletter to receive the latest updates on special offers, and
            heres a free one <span className="font-bold">$free10</span> for a
            free 10% off just for scrolling this far thank you for your
            support♥.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header className="font-bold ">
            05. Can I modify or cancel my order after it’s been placed?
          </Accordion.Header>
          <Accordion.Body>
            If you need to modify or cancel your order, please contact our{" "}
            <a className="font-semibold underline" href="#">
              customer service
            </a>{" "}
            team as soon as possible. We process orders quickly, so changes can
            only be made within a short window after the order is placed. Once
            the order has been processed or shipped, we won’t be able to make
            any modifications or cancellations.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default BasicExample;
