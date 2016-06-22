---
layout: post
title: WaterTracker - Structured data, integrated response
excerpt: How we're using mobile phones, IVRs, and an locally run initiative to save money fixing wells in Afghanistan.
date: 2012-06-25
tags: work mobile ushahidi usaid
published: true
---

_*The following is reposted from [the Ushahidi blog](https://www.ushahidi.com/blog/2012/06/25/watertracker-structured-data-integrated-response), with minor edits.*_

The photograph above was taken earlier this year at a training session in Khost, Afghanistan, introducing community leaders and elders to how they can interact with and benefit from a new Ushahidi instance developed to track the status of water wells all over the country.

There are a couple interesting points to note:

- It's outside.
- There's no technology.

And that latter point was one of our goals in implementing WaterTracker, a community-centric reporting tool developed for the Sustainable Water Supply and Sanitation project (SWSS) by New York based company [Arc Finance]. A system simple enough for even rural communities while able to support a multi-year, USAID-supported initiative that has, to date, constructed over 3,000 new water points throughout Afghanistan.

So how does it work?

What these elders are holding is the one sheet of paper explaining the process and providing them with the six digit codes associated by SWSS to each new well as it becomes available to the public.  If the well should break, someone in the community can call that number.  The IVR service asks them to enter the ID, confirm that the well is broken, and leave a short voice message about the problem.

This IVR service speaks with the WaterTracker Ushahidi instance (via the API), which stores and maps detailed information about thousands of water points throughout the country. When community calls are completed, the site immediately displays malfunctioning well reports instantaneously on a country map, including the voice message, and alerts the SWSS team.

[picture alt][1]



A WaterTracker staffer is alerted to malfunctioning wells as they appear, using Ushahidi as an internal dashboard.  He listens to these voice messages and begins the process of responding to the community via mobile in order to provide technical assistance to help them resolve the technical issues that they face.

We learned a lot in launching this website, lessons that can hopefully inform others who may want to launch similar instances in the future:

- *Structured information is immediately actionable information.* Bringing your Ushahidi instance online immediately to get information as quickly as possible might be essential during times of crisis and manageable if you have access to volunteers like the [Standby Task Force (SBTF)].  However, when you have a small team and the need to deliver only actionable information to contractors, asking the right questions of what's required goes a long way in removing the burden of inefficiency around processing unstructured information (what you will most likely receive using SMS or social media channels).
- *Working with existing teams, not around them.* Rather than bring the Ushahidi platform to the SWSS team and demand that they learn a whole new system, we asked their team what they were already working with to store contractor data (it was Microsoft Access). Using [George Chamales'] excellent Data Fusion plugin, we created the means for them to continue working how they were and, every week or so, import a new version of the dataset that would update existing information. It minimized the training requirements, the time to get online, and should someone of the staff leave they're not taking proprietary knowledge with them that needs to be retaught.
- *Return value.* Having a strategy to return immediate, consistent value to the community is a critical step for any successful deployment. Before you enter meetings about how the technology is going to change lives, but sure you can answer how the platform is going to bring value back to the community every month, every week, and, if possible, every day.
- *Consider all possible outgoing channels.* Part of returning value is evaluating the best means to communicate with those communities independently of how your information was received. For us, this meant not trying to get information back out through an automated system (IVR, SMS, etc.) but having SWSS team members personally call community leaders and contractors to facilitate the process of repairing their wells.
- Investigate and apply the right incentives.* When we started this program, the incentive strategy was, in broad terms, providing USAID the means to empower communities to contribute and improve the process by which wells are repaired and clean water is more quickly and consistently available. While that was certainly a major benefit, it didn't also hurt to consider the financial savings on USAID's end in streamlining operations along with the individual incentives of giving back phone credits to those who reported damaged wells.

Hopefully I'll get to unpacking each of these in further posts.

So is this system working?  Not only have we received hundreds of reports that have led to several wells fixed but, later this year, WaterTracker's management will be transferred from SWSS to the Afghan Ministry of Rural Rehabilitation and Development (MRRD).  This system is slated to ultimately incorporate nearly 100,000 wells throughout the the country.

Open source software in the Afghan government. Not bad. It certainly has us looking forward to more opportunities to leveraging these models for Ushahidi's position in development programs and how crowdsourced data methodologies — when correctly scoped, sourced, and applied — can play an instrumental role in improving joint efforts between organizations, companies, and communities.

_WaterTracker is a project of Arc Finance, an organization that focuses on linking energy enterprises with financial institutions to put clean energy products in the hands of the poor. Thanks also go to John Etherton (Etherton Technologies), George Chamales (Rogue Genius), and Antonio Lettieri (Webtonio) for their technical contributions to this deployment._

[1]:	/posts/assets/images/watertracker_flow.jpg "The Watertracker workflow"
