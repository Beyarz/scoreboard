# Custom type

Guide for https://YOUR_DOMAIN.prismic.io/masks/

## Type

Set the document type to repeatable

## Structure

```json
{
  "Main" : {
    "score" : {
      "type" : "Group",
      "config" : {
        "fields" : {
          "name" : {
            "type" : "Text",
            "config" : {
              "label" : "name",
              "placeholder" : "Name"
            }
          },
          "distance" : {
            "type" : "Number",
            "config" : {
              "label" : "distance",
              "placeholder" : "distance"
            }
          },
          "metric" : {
            "type" : "Text",
            "config" : {
              "label" : "metric",
              "placeholder" : "metric"
            }
          }
        },
        "label" : "score"
      }
    }
  }
}
```
