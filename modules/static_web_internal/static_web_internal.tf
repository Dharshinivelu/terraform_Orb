resource "azurerm_storage_account" "example" {
  name                     = var.static_web_internal_storage_account_name
  resource_group_name      = var.resource_group_name
  location                 = var.resource_group_location
  account_tier             = var.static_web_internal_account_tier
  account_replication_type = var.static_web_internal_account_replication_type

  static_website {
    index_document = var.static_website_internal_index_document
    error_404_document = var.static_website_internal_index_document
  }
  tags = {
    environment = "dev"
  }
}

resource "azurerm_storage_container" "example" {
  name                  = var.storage_container_internal_static_web_name
  storage_account_name  = azurerm_storage_account.example.name
  container_access_type = var.static_web_internal_container_access_type
}

# Upload your static website files to the blob container
resource "azurerm_storage_blob" "example" {
  name                   = var.static_web_internal_storage_blob_name
  storage_account_name   = azurerm_storage_account.example.name
  storage_container_name = azurerm_storage_container.example.name
  type                   = var.static_web_internal_storage_blob_type
  source                 = var.static_web_internal_storage_blob_source
}

resource "azurerm_cdn_profile" "cdn" {
  name                = var.cdn_profile_internal_portal_name
  resource_group_name = var.resource_group_name
  location            = var.resource_group_location
  sku                 = var.cdn_profile_internal_portal_sku

}

resource "azurerm_cdn_endpoint" "example" {
  name                = var.cdn_endpoint_internal_portal_name
  profile_name        = azurerm_cdn_profile.cdn.name
  location            = var.resource_group_location
  resource_group_name = var.resource_group_name

  origin {
    name      = azurerm_storage_account.example.name
    host_name = azurerm_storage_account.example.primary_web_host
    http_port  = 80
    https_port = 443
  }
}

# Update the origin hostname
resource "azurerm_cdn_endpoint" "example" {
  name                = azurerm_cdn_endpoint.example.name
  profile_name        = azurerm_cdn_profile.cdn.name
  location            = var.resource_group_location
  resource_group_name = var.resource_group_name
  origin_host_header = azurerm_storage_account.example.primary_web_host 
  origin {
    name                         = azurerm_storage_account.example.name
    host_name                    = azurerm_storage_account.example.primary_web_endpoint  # New hostname
    https_port                   = 443
    http_port                    = 80
  }

  is_http_allowed            = false
  is_https_allowed           = true
  content_types_to_compress  = ["text/html", "text/plain"]
}

output "storage_account_primary_blob_endpoint" {
  value = azurerm_storage_account.example.primary_blob_endpoint
}

output "static_website_endpoint" {
  value = azurerm_storage_account.example.primary_web_endpoint
}
