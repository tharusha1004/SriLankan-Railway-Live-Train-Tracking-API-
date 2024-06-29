# Sri Lanka Railways Train Tracking REST API

## Overview
Sri Lanka Railways operates numerous trains across the country and requires real-time tracking of these trains for various administrative and technical purposes. Each train engine is equipped with an IoT device that transmits GPS data at one-minute intervals through a mobile data network. This REST API ingests the location data and retains it for 90 days, allowing multiple client applications to consume the data for various purposes.