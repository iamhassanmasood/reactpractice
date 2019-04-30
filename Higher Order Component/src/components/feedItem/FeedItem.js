import React from "react";
import {Card, CardImg, CardHeader, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
const FeedItem = ({ contacts }) => {
    return (
        <Card body>
            {contacts.map((contact, index) => (
                <CardHeader  key={index}>
                    <CardImg
                        src={contact.thumbnail}
                        role="presentation"
                    />
                    <CardBody>
                        <CardTitle>{contact.name}</CardTitle>
                        <CardSubtitle>{contact.email}</CardSubtitle>
                    </CardBody>
                </CardHeader>
            ))}
        </Card>
    );
};

export default FeedItem;