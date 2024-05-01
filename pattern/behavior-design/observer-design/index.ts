import { IPhoneObservable } from "./observable/iphone-observable";
import { TextNotification } from "./observers/text-notification";
import { EmailNotification } from "./observers/email-notifaction";

const iphoneObj = new IPhoneObservable();

const user1 = new EmailNotification('user1@test.in', iphoneObj);
const user2 = new EmailNotification('user2@test.in', iphoneObj);

const user3 = new TextNotification('1256456', iphoneObj);
const user4 = new TextNotification('1256457', iphoneObj);

iphoneObj.add(user1);
iphoneObj.add(user2);
iphoneObj.add(user3);

iphoneObj.setData(10);