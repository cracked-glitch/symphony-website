// Terms, refund policy and privacy policy, in plain language.
// The same file lives in symphony-clips (src/lib/policies.js) for symphonyclips.com, so
// the two sites never say different things. Change one, copy it to the other.
//
// Paragraphs may contain [label](href) links. A section has a heading `h`, then any of
// `p` (paragraphs) and `list` (bullets), rendered in that order: p, list, after.

export const POLICY_UPDATED = 'November 13, 2026';

export function getPolicies({ brand, base = '', email, address }) {
  const terms = `${base}/terms`;
  const refunds = `${base}/refunds`;
  const privacy = `${base}/privacy`;
  const contact = `Email [${email}](mailto:${email}) or write to ${brand}, ${address}.`;

  return {
    terms: {
      title: 'Terms of Service',
      description: `What you get when you order clips from ${brand}, what's included, and what isn't.`,
      intro: `These terms cover every order from ${brand}. They're written to be read, not skimmed past. The short version: you send a video, we cut it into short clips, you get two rounds of changes, and the clips are yours. Once we start cutting, the order is final; the [Refund Policy](${refunds}) has the details.`,
      sections: [
        {
          h: '1. Who we are',
          p: [
            `${brand} is a trade name of Symphony AI, LLC, a Georgia limited liability company, ${address}. "We" and "us" mean Symphony AI, LLC. "You" means the person or business placing the order.`,
          ],
        },
        {
          h: '2. Agreeing to these terms',
          p: [
            `By paying for an order, you agree to these terms, the [Refund Policy](${refunds}) and the [Privacy Policy](${privacy}). If you're ordering for a business or for someone you represent, you're confirming you can agree for them.`,
            'Clips are custom work made for you, so orders are final once we start cutting, except as the [Refund Policy](' + refunds + ') says. You get two rounds of changes instead.',
            'If we quoted you something different in writing (an email or a text), the written quote wins where it differs from this page. We honor every price we have quoted you in writing.',
          ],
        },
        {
          h: '3. What you are buying',
          p: [
            'Short vertical video clips cut from a video you provide. The page or email you ordered from, and your Stripe receipt, show the price, how many clips, and the turnaround. Those details are part of your order.',
          ],
          list: [
            '"Up to" a number of clips means we cut as many moments as the video honestly supports, up to that number. A clip has to make sense on its own, so some videos give fewer.',
            'If one video doesn’t have enough good moments for the full count, send us another video or more footage within 60 days and we’ll cut the rest from it. Getting fewer clips from one video isn’t grounds for a refund.',
            'Captions are in English and included unless your order says otherwise. Where offered, you also get a clean copy without captions.',
            'We pick the moments unless you tell us at checkout which ones you want, or what to skip.',
            'Clips use your real audio. We never add laughs, applause or sound that wasn’t there.',
          ],
        },
        {
          h: '4. What is not included',
          p: ['Unless we agree to it in writing, an order does not include:'],
          list: [
            'Posting the clips or running your social media accounts.',
            'Titles, logos, graphics, thumbnails, music or sound effects.',
            'Combining camera angles, color correction, or fixing bad audio or video.',
            'Captions in languages other than English.',
            'More clips than you ordered, or clips from a different video.',
            'Long edits, full-length videos or trailers.',
          ],
          after: ['We’re happy to quote any of these separately.'],
        },
        {
          h: '5. Your video',
          list: [
            'You confirm you own the video or have permission to use it, including any needed permission from the venue, other performers, people on camera and anyone who owns the music.',
            'You let us download and copy your video, including from a link you send (YouTube, Google Drive or similar), only to make, fix and deliver your clips.',
            'We don’t clear music rights. Platforms may mute or remove clips with copyrighted music. That isn’t a fault in the clips.',
            'You’re responsible for what you post and where.',
            'We can turn down any order, before or after payment, for example footage you don’t seem to have the right to use, or content that is illegal, sexually explicit, hateful or harassing. If we turn down a paid order, we refund it in full.',
          ],
        },
        {
          h: '6. Turnaround',
          p: [
            'The clock starts once we have three things: your payment, a working link to or file of your video, and the answers to any questions we asked about the order. Turnaround times are targets we work hard to hit, not guarantees. If we’re going to be late, we’ll tell you. A late delivery isn’t grounds for a refund.',
          ],
        },
        {
          h: '7. Delivery',
          p: [
            'We deliver your clips on a private web page, by email, or by a download link. Private pages are unlisted and hidden from search engines, and only someone with the exact link can open them. Please save your clips. We keep delivery pages up for at least 14 days after the last delivery, and the delete date is shown on the page. After that the page and its clips are deleted, unless you add page hosting (section 12).',
          ],
        },
        {
          h: '8. Changes',
          p: [
            'Every order includes two rounds of changes, asked for within 7 days of delivery. A round is one message that lists everything you want changed across the clips.',
          ],
          list: [
            'Included: caption wording, spelling and timing; where a clip starts and ends; bleeping or cutting a word; dropping filler words from captions; captions on, off or moved; and swapping a clip for a different moment from the same video.',
            'Not included: anything from section 4, new footage, or a new style we weren’t told about before cutting. We’ll quote these, or you can place a new order.',
            'If you don’t ask for changes within 7 days of a delivery, that delivery is accepted and the order is complete.',
            'Once we’ve delivered your clips and made the changes you asked for, up to two rounds, the order is complete. Not liking the clips is a reason to ask for changes, not for a refund.',
          ],
        },
        {
          h: '9. Who owns what',
          list: [
            'Once your order is paid, the clips are yours to use anywhere, as often as you like, including commercially. You keep every right to your original video. We claim none.',
            'We won’t post, share or sell your video or your clips, and we won’t use them in our own marketing without your written OK.',
            'Our software, templates and caption styles stay ours.',
            'If an order is refunded, the clips from it are not licensed to you. Please don’t post them.',
          ],
        },
        {
          h: '10. Free sample clips',
          p: [
            'Sometimes we cut a free sample from a video you’ve already posted publicly and send it to you, to show what we do. It’s free with no obligation. You can keep it and post it. The page is private and you can delete it in one tap, or ask us to by email. We delete the sample and the copy of your video we downloaded to make it.',
          ],
        },
        {
          h: '11. Payment',
          list: [
            'Payment is up front, in US dollars, through Stripe. We never see or store your full card number.',
            'Prices on the site can change, but never for an order you’ve already paid for.',
            'Packages that cover several shows or videos are good for 12 months from purchase. Unused shows aren’t refundable once work on the first one has started.',
          ],
        },
        {
          h: '12. Monthly plans and page hosting',
          p: [
            'A monthly plan renews each month until you cancel. Cancel any time by email. It ends at the close of the month you’ve paid for. Clips you don’t use in a month don’t roll over.',
            'Page hosting is $14 a month. It keeps your clips page and every clip on it online for as long as you keep paying, with no delete date. Clips from any later order are added to the same page. Hosting covers storing and showing the page. New clips and changes are separate orders.',
            'A hosted page stays private (unlisted, hidden from search engines, open only to someone with the link) unless you ask us in writing to make it public. If you do, anyone can find and view it, including search engines. You can ask us to make it private again, or to delete it, at any time.',
            'Cancel page hosting any time by email. The page stays up until the end of the month you’ve paid for. After that we email you, keep the page up for 14 more days so you can download your clips, and then delete it.',
          ],
        },
        {
          h: '13. How the clips are made',
          p: [
            'We use our own software and third-party tools, including automated transcription and editing software, to find moments, crop the frame and time captions. A person is responsible for every order and you can reach them by email.',
          ],
        },
        {
          h: '14. No promise of results',
          p: [
            'We make clips. We can’t promise views, followers, bookings, leads or sales from them, and an order isn’t refundable because a clip didn’t perform.',
          ],
        },
        {
          h: '15. Limits',
          list: [
            'Apart from what these terms promise, the clips are provided as they are, without other warranties.',
            'If something goes wrong, the most we owe you is what you paid for the order in question. We aren’t liable for indirect or follow-on losses, such as lost bookings, income or followers.',
            'You agree to cover our costs if someone brings a claim against us because of a video you didn’t have the right to use, or because of how you used the clips.',
            'Where the law doesn’t allow a limit like these, it applies only as far as the law allows.',
          ],
        },
        {
          h: '16. Disagreements',
          p: [
            'Talk to us first. Most problems get fixed with one message. If we can’t settle it, Georgia law applies, and any case goes to the state or federal courts in Fulton County, Georgia. Either of us can use small claims court instead.',
          ],
        },
        {
          h: '17. Changes to these terms',
          p: [
            'We may update these terms. The date at the top shows the latest version. Your order is covered by the terms in place on the day you paid.',
          ],
        },
        {
          h: '18. Contact',
          p: [contact],
        },
      ],
    },

    refunds: {
      title: 'Refund Policy',
      description: `Clips are custom work. ${brand} orders can be refunded only before the work starts.`,
      intro: `Every order is custom work. Once we start cutting your video, that time is spent and can't be used for anyone else, so orders are final once work starts. What you get instead is two rounds of changes to get the clips right. Please read this before you pay. The [Terms of Service](${terms}) cover the rest of the order.`,
      sections: [
        {
          h: 'When we refund',
          p: ['Only in these cases:'],
          list: [
            'You cancel before we start. Ask before we’ve started cutting and we refund in full. Work often starts within hours of payment, so ask quickly.',
            'We stop offering page hosting. If we ever do, we refund any month you’ve paid for and haven’t had, and give you at least 30 days to download your clips.',
            'We can’t do the job at all. If we turn down your order (section 5 of the [Terms](' + terms + ')), or we can’t make usable clips from any video you send us, we refund in full.',
          ],
        },
        {
          h: 'When we don’t refund',
          list: [
            'Once we’ve started cutting your video.',
            'Because you don’t like the clips. That’s what your two rounds of changes are for. Once we’ve delivered the clips and made the changes you asked for, the order is complete.',
            'Because a video gave fewer clips than the number on your order. Orders are for "up to" a number of clips. Send us another video or more footage within 60 days and we’ll cut the rest from it.',
            'Because a delivery took longer than expected. If we’re running behind, we’ll tell you and keep working until your clips are delivered.',
            'Because a clip didn’t get the views, followers or bookings you hoped for.',
            'For a style, length or edit you didn’t ask for before we cut, or for work outside the order (section 4 of the [Terms](' + terms + ')).',
            'For unused shows in a package once work on the first show has started. Unused shows stay good for 12 months from purchase.',
            'For a month of a monthly plan once that month’s work has started. Cancelling stops the next charge.',
            'For a month of page hosting once that month has started. Cancelling stops the next charge, and your page stays up until the end of the month you’ve paid for.',
          ],
        },
        {
          h: 'If your footage won’t work',
          p: [
            'If the audio, framing or length of a video means we can’t make good clips from it, we tell you before cutting and you send a different one. Your order stays open for 60 days.',
          ],
        },
        {
          h: 'How to cancel',
          p: [
            `${contact} Tell us your name and the email you paid with. If work hasn’t started, the refund goes back to the card or account you paid with through Stripe and usually shows up in 5 to 10 business days.`,
          ],
        },
        {
          h: 'Disputed charges',
          p: [
            'Please talk to us before disputing a charge. By paying, you agree that a delivered order isn’t refundable. If a charge is disputed, we’ll send the payment processor our records: your order, these terms, the delivered clips and our messages with you. We may decline future orders from anyone who disputes a delivered order or abuses changes.',
          ],
        },
      ],
    },

    privacy: {
      title: 'Privacy Policy',
      description: `What ${brand} collects, why, who sees it, and how to have it deleted.`,
      intro: `We collect only what we need to make your clips, get paid and stay in touch. We don't sell it. This policy covers ${brand} and this website.`,
      sections: [
        {
          h: 'Who is responsible',
          p: [`Symphony AI, LLC, which runs ${brand}, ${address}. ${contact}`],
        },
        {
          h: 'What we collect',
          list: [
            'When you order: your name, email, and what you tell us at checkout (which video, notes, captions or not). Stripe collects your payment details and billing information such as postal code. We never see your full card number.',
            'Your video and what we make from it: the video or link you send, a transcript of it, and the clips.',
            'Messages: emails, texts, calls and anything you send through a form on this site.',
            'If we contacted you first: your name, a business email or contact address you’ve listed publicly, and public details such as your website, channel, videos and show listings.',
            'Website visits: our hosting provider keeps standard server logs (IP address, browser, pages visited) for security. We don’t use advertising cookies or tracking pixels. Example clips from YouTube load through YouTube’s privacy-enhanced mode, and YouTube may set cookies if you play one.',
          ],
        },
        {
          h: 'How we use it',
          list: [
            'To make, fix and deliver your clips.',
            'To take payment, give refunds and keep the records tax law requires.',
            'To answer you, and to send emails about our service, including a free sample clip and a few follow-ups.',
            'To prevent fraud and keep the site working.',
          ],
        },
        {
          h: 'Emails we send first',
          p: [
            'We email business contact addresses that are listed publicly. Every email says who we are and includes our mailing address. Reply "stop" (or anything that means it) and we won’t email you again. We keep your address on a do-not-contact list only so that we never do.',
          ],
        },
        {
          h: 'Who we share it with',
          p: ['Only the companies that help us run the service, and only what they need:'],
          list: [
            'Stripe, for payments.',
            'Google Workspace, for email.',
            'Cloudflare, for hosting this site and storing clips and private pages.',
            'Formspree, for forms on this site.',
            'Transcription and text-processing software providers, which process your video’s audio or transcript to make captions and find moments.',
          ],
          after: [
            'We don’t sell or rent your information, and we don’t share it for advertising. We may disclose it if the law requires, or to a buyer if the business is ever sold, under this same policy.',
          ],
        },
        {
          h: 'How long we keep it',
          list: [
            'Your video and clips: while we’re working with you, and for a reasonable time after so we can make fixes or cut more. Ask at any time and we’ll delete them.',
            'Free sample pages: deleted when you tap delete or ask us, and taken down after about two weeks otherwise.',
            'Delivery pages: at least 14 days after the last delivery, or for as long as you pay for page hosting. A hosted page is private unless you ask us to make it public, and then anyone can see it, including search engines.',
            'Payment records: as long as tax law requires, usually up to 7 years.',
            'The do-not-contact list: for as long as we send email.',
          ],
        },
        {
          h: 'Your choices',
          p: [
            'You can ask to see the information we hold about you, correct it, or delete it, and you can opt out of our emails at any time. Send the request to us using the contact details below. We act on it within 30 days, and we confirm deletions within 7 days. We don’t sell personal information or share it for cross-context advertising, as those terms are used in California and other state privacy laws.',
          ],
        },
        {
          h: 'Security',
          p: [
            'Private pages use long random links that aren’t listed anywhere, payments run through Stripe, and access to files is limited to the people working on your order. No system is perfectly secure, but we take reasonable care.',
          ],
        },
        {
          h: 'Children',
          p: [
            'Our service is for adults and businesses. We don’t knowingly collect information from anyone under 18.',
          ],
        },
        {
          h: 'Changes',
          p: ['If we change this policy, we update the date at the top. Big changes, we’ll point out.'],
        },
        {
          h: 'Contact',
          p: [contact],
        },
      ],
    },
  };
}
