---
layout: post
title: How to handle unauthorized / fraudulent transaction on Credit Card in India?
date: 2019-05-05 22:15 +0530
categories: [Guides]
image: /assets/images/credit-card-fraud.jpg
tags: [featured]
---

With increase in usage of credit cards in India, the cases of unauthorized / fraudulent transactions are also increasing at alarming rate. Though banks provide security measures like one time password (OTP) to authorize the online transactions, international websites can charge your card without OTP. Thus, if someone gets hold of your credit card information, they can very well use the card on international websites.

In this article I'll outline the liability of a customer in case of fraudulent transactions, steps to follow immediately after becoming aware of such transactions, finally followed my personal experience of dealing with one such fraudulent transaction on one of my credit cards.

<!-- prettier-ignore -->
* TOC
{:toc}

### Liability of Customer

RBI via circular [DBR.No.Leg.BC.78/09.07.005/2017-18](https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11040&Mode=0) has limited the liability of customers in case of unauthorized transactions.

<table class="table" style="display: block;overflow-x: auto;">
<thead class="thead-dark">
<tr>
	<th scope="col"> Scenario </th>
	<th scope="col"> Liability of Customers	</th>
</tr>
</thead>
<tbody>
<tr>
	<td> Negligence or deficiency on the part of the bank </td>
	<td> Zero </td>
</tr>
<tr>
	<td> Third party breach and the customer notifies the bank within three working days </td>
	<td> Zero </td>
</tr>
<tr>
	<td> Third party breach and the customer notifies the bank within four to seven working days </td>
	<td><ul><li>Rs. 10,000 if credit limit <= Rs. 5,00,000</li>
    <li>Rs. 25,000 if credit limit > Rs. 5,00,000</li></ul></td>
</tr>
<tr>
	<td> Third party breach and the customer notifies the bank after seven working days </td>
	<td> As per bank's policy </td>
</tr>
<tr>
	<td> Due to negligence of customer </td>
	<td> <ul><li>Customers will bear entire loss till they report unauthorized transaction to the bank</li><li>Loss occurring after the reporting of the unauthorized transaction shall be borne by the bank</li></ul> </td>
</tr>
</tbody>
</table>

### Steps to follow after fraudulent transaction

As you can see in previous section, RBI has limited the liability of customers to a great extent in case of unauthorized transactions. Hence, don't panic and maintain your calm and composure.

1.  Call customer care number generally printed on back side of your card immediately and report the fraudulent transaction to them.
2.  Tell them you would like to dispute the transaction and ask how to do so (different banks follow different procedures, some will ask you to fill a form, some will take request over phone).
3.  Ask them to block the existing card and issue a new card.
4.  Ask them for reference number for the interaction and make a note of it.
5.  Record the entire phone conversation and take screenshot of SMS you received for fraudulent transaction.
6.  For a safer side, report the incident over email too quoting the reference number which you received from phone conversation.
7.  Provide bank all necessary documents asked by them. Generally they ask for copy of front of credit card and FIR copy.
8.  Bank will now investigate the transaction and in meantime they will immediately restore the credit limit of your card for fraudulent transaction.
9.  After completing their investigation, bank will let you know the outcome. If it goes in your favor, loss would be borne by the bank. If it goes against you, ask for evidences which led them go against you. Bank, in meantime, will revoke the credit which was restored for fraudulent transaction.
10. Review the evidences and dispute again providing your justification. You must provide evidences to support your argument.
11. Bank will review your argument and in meantime they will again restore the credit limit. Once they decide, they will let you know the outcome. If it goes in your favor, loss would be borne by the bank and bank will make the credit permanent. If not, then you'll have to pay the amount with interest.
12. If you still want to pursue this further, you can file a complaint with [Banking Ombudsman](https://cms.rbi.org.in/) online.
13. If you're still not satisfied with the Banking Ombudsman’s decision, you can approach the Appellate Authority to file an appeal. The appellate authority in this case is the deputy governor of the RBI. Alternatively, you can approach consumer redressal forums, which take up bank-related complaints, or even the courts after hiring a lawyer.

### Personal Experience

One fine morning, I woke up with a SMS saying I have spent \$400 on Paypal. I was quite perplexed as no way I could've done that transaction since I was asleep. I immediately called the bank to report the transaction. Phone banker promptly blocked my card and took a request of issuance of replacement card. However he didn't take the request of disputing the transaction as only authorization was taken and amount was still not claimed by merchant. He asked me to wait for three days and call again to check the status of the transaction. I was reluctant for this asked him to block the transaction as amount hasn't been claimed. He expressed the inability to do so and asked me to wait for three days and call again. With no other choice left, I disconnected the call and started waiting for three days to pass.

After three days, I called the bank again and asked for status of the transaction. Phone banker told me that indeed the amount has been claimed by the merchant and I can file dispute now. I asked him about the procedure and he said, no need to do anything extra and he is taking the request over phone. After taking the request, he shared a reference number with me and asked me to quote this number during future communications. He said I'll be given temporary credit for the amount disputed and bank will investigate & share the results with me in 15 working days.

15 woking days were over and I didn't receive anything. I started following up continuously and finally after 2.5 months, I received an email stating that investigation is complete and temporary credit is reversed in light of evidence document attached. The disputed was rejected citing following reason:

> The shipping and the AVS matched billing address are the same. This indicates that the account holder and the card owner are the same person. Authorization was obtained prior to the transaction. Authorization Code: X00000.

The evidence document outlined more details about the transaction e.g. shipping address, billing address, seller name, seller email address, IP address etc. I reviewed the entire evidence document carefully and found multiple irregularities in that. Below is the evidence document, with sensitive information redacted, for your reference:

{% include image.html image="chargeback-evidence.jpg" alt="Evidence Document" class="img-center" %}

After reviewing this, I drafted following response:

<div class="quote p-2 bg-lightblue">
<p>Hello,</p>

<p>I would like to still dispute the transactions due to multiple irregularities with the transaction and your investigation report as mentioned below:</p>

<ol>
  <li>
    <p>Non-existent billing and shipping address: The billing and shipping address is mentioned as below for this transaction:</p>

    <p>23 mangar road

xxxx xxxxx xxxxx, India</p>

    <p>This address is non-existent and there is no road called “mangar road” in xxxxxx. You can verify the same from your end.</p>

  </li>
  <li>
    <p>Shipping and billing address not matching with my card billing address: You can check yourself that the shipping and billing address on transaction is not the same as my card billing address. My card billing address is as below:</p>

    <p>xxxx

xxxx
xxxx
xxxx, India</p>

    <p>Clearly this address is not same as below address which is used for transaction:</p>

    <p>23 mangar road

xxxx xxxxx xxxxx, India</p>

  </li>
  <li>
    <p>Wrong claim about matching of shipping and AVS matched billing address: The AVS response in your investigation report clearly says “S: SERV UNAVAILABLE”. It means AVS was not carried out for verifying this transaction.</p>
  </li>
  <li>
    <p>No proof provided about the delivery of product/services availed against the payment: The investigation report produced by you doesn’t provides any detail about the proof of delivery of product and services availed against the payment. The only details available are Seller Name and Seller Email address. No details about business/customer service number is available in your report. Also no tracking number or status is available for this transaction. Can you please produce me the proof of delivery of product/services availed against the payment disputed by me?</p>
  </li>
  <li>
    <p>Unavailability of ECI 3DS and CVV Response: The investigation report produced by you doesn’t show the ECI 3DS or CVV response. These high security markers are essential to determine the authenticity of the transaction. This particular transaction lacks both these which further raises the suspicion on authenticity of this transaction.</p>
  </li>
  <li>
    <p>IP used for transaction is belongs to region where I was not present on the date transaction was carried out: The IP used for transaction is 117.201.86.21 which belongs to Uttarakhand, Dehradun 248001, India. On this date I was in xxxxxx not Dehradun. If I am not present at that location, how could I carry out the transaction?</p>
  </li>
</ol>

<p>
<picture>
  <source srcset="/assets/images/ip-details.webp" type="image/webp">
  <img class="img-center" src="/assets/images/ip-details.jpg" alt="IP Details">
</picture>
</p>

<p>In light of reasons/facts mentioned above, I would like to dispute the transaction again. Please let me know if you need more details regarding the same.</p>
</div>

After providing this response, the temporary credit was restored again and I was asked to wait for another 15 working days. However they didn't communicate anything to me after 15 days and I had to follow up continuously again. After 2 months from previous response, I received an email stating complaint regarding this transaction had been closed in my favor and the temporary credit that was provided to my card account had now been made permanent. I heaved a sigh of relief after seeing this email.

The whole ordeal lasted for 4.5 months and I can't express the mental stress and agony I went through. However at the end, the case settled in my favor leaving me with yet another unique experience.

_Have you ever disputed a card transaction? How was your experience and how much time did it take to resolve? Let me know in comments._
