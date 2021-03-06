import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Email } from 'meteor/email';

Meteor.methods({
  sendEmail:function (message) {
    check(message, Object);

    Meteor.defer(() => {
      Email.send({
        to: 'Ockupy <info@ockupy.com>',
        from: `${message.name} ${message.email}`,
        subject: `${message.name} from ${message.company} sent an Email!`,
        text: `Perspective Client needs help with ${message.help}, and has a Budget of ${message.budget}. "<br />"
        ${message.message}`
      });
    });
  }
});
