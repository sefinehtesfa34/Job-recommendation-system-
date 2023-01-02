# job-recommendation
We are building a job recommendation system.
# How it works?
## If a user has a resume, then we will use his resume for the recommender model. 
## Otherwise, we will recommend the most popular jobs.
# Team members   
| Name          |University ID|University|                        Country|
----------------|:-----------:|:---------------------------------:|:--------------:|
| Sefineh Tesfa |UGR/2844/12  |Addis Ababa Institute of Technology|        Ethiopia|
|Birehan Anteneh|UGR/4886/12  |Addis Ababa Institute of Technology|        Ethiopia|
|Gizaw Dagne    |UGR/6640/12  |Addis Ababa Institute of Technology|        Ethiopia|
<br>

# Jobs schema
|Attribute               | Required|
|--------------          |:-------:|
|userId                  |True     |
|Job title               |True     |
|Job description         |True     |
|Qualifications          |True     |
|Job responsibility      |True     |
|Preferred qualifications|False|
|Job salary              |False    |
|Job category            |False    |
|Timestamp               |False    |
<br>

# Users schema

|Attribute               | Required|
|--------------          |:-------:|
|Username                |True     |
|Email                   |True     |
|Password                |True     |
|First Name              |True     |
|Last Name               |True     |
|Title                   |True     |
|Residence               |True     |
|Resume/CV               |False    |
|Gender                  |False    |
|Date of Birth           |False    |
|About                   |False    |

