export class ChatWidget {
    private readonly widgetElement: HTMLElement;
    private readonly chatButtonElement: HTMLButtonElement;
    private readonly chatBoxElement: HTMLDivElement;
    private readonly svgOpen: string;
    private readonly svgClose: string;
    private isOpen: boolean = false;

    constructor() {
        this.svgOpen = '<svg class="svg-icon" style="width: 30px; height: 30px;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M920.5 515.8c-22.1 0-40 17.9-40 40 0 83.2-42.7 159.6-117.1 209.7l-21.9 14.7 10.8 56.4-83-28.9-11.1 2.4c-22.7 5-46.2 7.5-69.8 7.5-22.1 0-40 17.9-40 40s17.9 40 40 40c25.5 0 50.9-2.4 75.7-7.1l192.8 67.1-27.1-141.7c36.3-28.5 66.7-63.5 88.8-102.4 27.4-48.4 41.9-103 41.9-157.9 0-21.9-17.9-39.8-40-39.8z"  /><path d="M808.4 562.7c20.6-44.3 31.1-91.4 31.1-140s-10.5-95.7-31.1-140c-19.8-42.5-48-80.6-83.9-113.3-73.1-66.5-170.1-103.1-273-103.1s-199.9 36.6-273 103.1c-35.9 32.7-64.2 70.8-83.9 113.3-20.6 44.3-31.1 91.4-31.1 140 0 57.2 15.1 114.1 43.7 164.5 23.1 40.8 55.2 77.6 93.5 107.4l-28 146.4 199.4-69.4c26 5 52.7 7.5 79.4 7.5 102.9 0 199.9-36.6 273-103.1 35.9-32.7 64.1-70.8 83.9-113.3zM451.5 699c-24.9 0-49.6-2.7-73.6-7.9l-11.1-2.4-89.6 31.2 11.7-61.1-21.9-14.9c-78.5-52.8-123.5-133.5-123.5-221.3 0-152.4 138.2-276.4 308-276.4s308 124 308 276.4c0 152.5-138.2 276.4-308 276.4z"  /><path d="M232.923859 443.627447a41.2 41.2 0 1 0 58.264582-58.266616 41.2 41.2 0 1 0-58.264582 58.266616Z"  /><path d="M416.026252 443.637225a41.2 41.2 0 1 0 58.264582-58.266616 41.2 41.2 0 1 0-58.264582 58.266616Z"  /><path d="M599.128939 443.647711a41.2 41.2 0 1 0 58.264582-58.266616 41.2 41.2 0 1 0-58.264582 58.266616Z"  />'
        this.svgClose = '<svg class="svg-icon" style="width: 30px; height: 30px;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M920.5 515.8c-22.1 0-40 17.9-40 40 0 83.2-42.7 159.6-117.1 209.7l-21.9 14.7 10.8 56.4-83-28.9-11.1 2.4c-22.7 5-46.2 7.5-69.8 7.5-22.1 0-40 17.9-40 40s17.9 40 40 40c25.5 0 50.9-2.4 75.7-7.1l192.8 67.1-27.1-141.7c36.3-28.5 66.7-63.5 88.8-102.4 27.4-48.4 41.9-103 41.9-157.9 0-21.9-17.9-39.8-40-39.8z"  /><path d="M808.4 562.7c20.6-44.3 31.1-91.4 31.1-140s-10.5-95.7-31.1-140c-19.8-42.5-48-80.6-83.9-113.3-73.1-66.5-170.1-103.1-273-103.1s-199.9 36.6-273 103.1c-35.9 32.7-64.2 70.8-83.9 113.3-20.6 44.3-31.1 91.4-31.1 140 0 57.2 15.1 114.1 43.7 164.5 23.1 40.8 55.2 77.6 93.5 107.4l-28 146.4 199.4-69.4c26 5 52.7 7.5 79.4 7.5 102.9 0 199.9-36.6 273-103.1 35.9-32.7 64.1-70.8 83.9-113.3zM451.5 699c-24.9 0-49.6-2.7-73.6-7.9l-11.1-2.4-89.6 31.2 11.7-61.1-21.9-14.9c-78.5-52.8-123.5-133.5-123.5-221.3 0-152.4 138.2-276.4 308-276.4s308 124 308 276.4c0 152.5-138.2 276.4-308 276.4z"  /><path d="M232.923859 443.627447a41.2 41.2 0 1 0 58.264582-58.266616 41.2 41.2 0 1 0-58.264582 58.266616Z"  /><path d="M416.026252 443.637225a41.2 41.2 0 1 0 58.264582-58.266616 41.2 41.2 0 1 0-58.264582 58.266616Z"  /><path d="M599.128939 443.647711a41.2 41.2 0 1 0 58.264582-58.266616 41.2 41.2 0 1 0-58.264582 58.266616Z"  />'

        this.widgetElement = document.createElement('div');
        this.widgetElement.classList.add('chat-widget');
        this.widgetElement.addEventListener('click', this.toggleChatBox.bind(this));

        this.chatButtonElement = document.createElement('button');
        this.chatButtonElement.classList.add('chat-button');
        this.chatButtonElement.innerHTML = this.svgOpen;
        this.widgetElement.appendChild(this.chatButtonElement);

        this.chatBoxElement = document.createElement('div');
        this.chatBoxElement.classList.add('chat-box');
        this.chatBoxElement.style.display = 'none';
        this.widgetElement.appendChild(this.chatBoxElement);

        document.body.appendChild(this.widgetElement);
    }

    async loadHistory() {
        const deviceId = this.getDeviceId();
        const msg = await fetch(`https://web.api.finddoc.io/chat`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-device-id": 'sjh0blcu04ecgx22ojf1kg'//deviceId,
            },
        });
        const history = await msg.json();
        console.log(history);
        return history;
    }

    private toggleChatBox() {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.chatBoxElement.style.display = 'block';
            this.chatButtonElement.innerHTML = this.svgOpen;
        } else {
            this.chatBoxElement.style.display = 'none';
            this.chatButtonElement.innerHTML = this.svgClose;
        }
    }

    public addMessage(message: string) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message');
        messageElement.innerHTML = message;
        this.chatBoxElement.appendChild(messageElement);
    }

    public getDeviceId() {
        const deviceId = localStorage.getItem('FINDDOC_DEVICE_ID');
        if (!deviceId) {
            const newDeviceId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            localStorage.setItem('FINDDOC_DEVICE_ID', newDeviceId);
            return newDeviceId;
        }
        return deviceId;
    }
}

function escapeHtml(unsafe: string) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export async function init(): Promise<void> {
    const chatWidget = new ChatWidget();
    const history = await chatWidget.loadHistory();
    for (const h of history) {
        // h.type === 'q' | 'a'
        chatWidget.addMessage(escapeHtml(h.message).replace(/\n/g, '<br/>'));
    }
}